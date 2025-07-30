import { jsPDF } from "jspdf";

/* --------------------------------------------------------------- */
/* 1️⃣  ONE‑LINER OKLCH → rgb helper                                */
const cssOkLchToRgb = (c: string) => {
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = c;
  return ctx.fillStyle as string;              // returns "rgb(r g b)"
};

/* --------------------------------------------------------------- */
/* 2️⃣  Patch html2canvas's colour parser ONCE per page‑load        */
function patchHtml2canvasColor() {
  // jspdf pulls in its own bundled copy of html2canvas on demand
  const h2c: any = (window as any).html2canvas;
  if (!h2c?.Color || h2c.Color.__oklchPatched) return;

  const orig = h2c.Color.parseColor;
  h2c.Color.parseColor = (value: any, ...rest: any[]) => {
    if (typeof value === "string" && value.trim().startsWith("oklch(")) {
      console.debug("[h2c‑patch] converting", value);
      value = cssOkLchToRgb(value);
    }
    return orig(value, ...rest);
  };
  h2c.Color.__oklchPatched = true;
  console.debug("[h2c‑patch] html2canvas colour parser patched");
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

/* --------------------------------------------------------------- */
/* 4️⃣  Public API                                                 */
export async function exportResumePdf(filename = "resume.pdf") {
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("#resume-preview not found");

  scrub(src);                    // pass #1  – live node
  patchHtml2canvasColor();       // <--- NEW

  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  await pdf.html(src, {
    margin: 24,
    autoPaging: "text",
    html2canvas: {
      scale: 2,
      onclone: (win: any) => scrub(win.document ?? win),  // pass #2
    },
    callback: doc => doc.save(filename),
  });
} 