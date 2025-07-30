import { jsPDF } from "jspdf";
import type { Options } from "html2canvas";   // dev‑only type

/* helper: oklch → rgb() */
const ok2rgb = (c: string) => {
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = c;
  return ctx.fillStyle as string;
};

/* patch the *given* html2canvas module */
function patchH2C(h2c: any) {
  const C = h2c?.Color;
  if (!C || C.__oklchPatched) return;

  // Initialize conversion counter
  (window as any).__h2cConversions = 0;

  for (const key of Object.keys(C)) {
    const fn = C[key];
    if (typeof fn !== 'function') continue;

    C[key] = function patched(v: any, ...rest: any[]) {
      if (typeof v === 'string' && v.trim().startsWith('oklch(')) {
        console.debug('[h2c‑patch]', key, 'converting', v);
        (window as any).__h2cConversions++;
        v = ok2rgb(v);
      }
      return fn.call(this, v, ...rest);
    };
  }

  C.__oklchPatched = true;
  console.debug('[h2c‑patch] all Color fns wrapped ✔');
}

/* --------------------------------------------------------------- */
/* 3️⃣  Your existing DOM scrubber (keep it – belt‑and‑suspenders)  */
function scrub(node: Window | Document | HTMLElement) {
  const doc = toDoc(node);
  if (!doc || !doc.documentElement) return;     // <-- safeguard

  // :root background
  const root = doc.documentElement as HTMLElement;
  const rootBg = getComputedStyle(root).backgroundColor;
  if (rootBg.includes("oklch")) root.style.backgroundColor = oklchToRgb(rootBg);

  // every descendant
  doc.body.querySelectorAll<HTMLElement>("*").forEach(el => {
    const cs = getComputedStyle(el);

    const fix = (prop: string) => {
      const val = (cs as any)[prop] as string | undefined;
      if (val && val.includes("oklch"))
        (el.style as any)[prop] = oklchToRgb(val);
    };

    fix("color");
    fix("backgroundColor");
    fix("outlineColor");
    ["borderColor","borderTopColor","borderRightColor",
     "borderBottomColor","borderLeftColor"].forEach(fix);

    // shadows can contain multiple colours → regex replace
    ["boxShadow","textShadow","WebkitBoxShadow"].forEach(prop => {
      const val = (cs as any)[prop] as string | undefined;
      if (val && val.includes("oklch"))
        (el.style as any)[prop] = val.replace(/oklch\([^)]+\)/g, m => oklchToRgb(m));
    });

    // additional properties that might contain OKLCH
    fix("background");  // catches linear-gradient, etc.
    fix("filter");      // catches drop-shadow()
    fix("borderImage");
    fix("maskImage");
    fix("clipPath");
  });

  // handle SVG elements specifically
  doc.querySelectorAll("svg").forEach(svg => {
    const fill = svg.getAttribute("fill");
    if (fill && fill.includes("oklch")) {
      svg.setAttribute("fill", oklchToRgb(fill));
    }
    const stroke = svg.getAttribute("stroke");
    if (stroke && stroke.includes("oklch")) {
      svg.setAttribute("stroke", oklchToRgb(stroke));
    }
  });
}

/** Accept Window | Document | HTMLElement and return its Document */
function toDoc(node: Window | Document | HTMLElement): Document {
  return node instanceof Window
    ? node.document
    : node instanceof Document
      ? node
      : node.ownerDocument!;
}

function oklchToRgb(c: string): string {
  if (!c.startsWith("oklch")) return c;
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = c;
  return ctx.fillStyle as string;
}

/* public API */
export async function exportResumePdf(file = "resume.pdf") {
  console.log("exportResumePdf loaded"); // debug log
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("#resume-preview not found");

  /* 1️⃣  scrub live node */
  scrub(src);

  /* 2️⃣  load + patch html2canvas */
  const h2c = (await import("html2canvas")).default;
  console.log("html2canvas loaded:", !!h2c); // debug log
  patchH2C(h2c);

  /* 3️⃣  ***important*** — hand the *same* instance to jspdf */
  (window as any).html2canvas = h2c;   // –> jspdf will reuse this
  console.log("window.html2canvas set:", !!(window as any).html2canvas); // debug log

  /* 4️⃣  extra belt-and-suspenders (rare but helpful) */
  for (const k in window) {
    const maybe = (window as any)[k];
    if (maybe?.Color?.parseColor && !maybe.Color.__oklchPatched) {
      patchH2C(maybe);            // patch *every* stray copy hanging around
    }
  }

  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  await pdf.html(src, {
    margin: 24,
    autoPaging: "text",
    html2canvas: {          // normal h2c options go here
      scale: 2,
      onclone: (w: any) => scrub(w.document ?? w),
    },
    callback: d => d.save(file),
  });
} 