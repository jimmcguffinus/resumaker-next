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
  if (!h2c?.Color || h2c.Color.__oklchPatched) return;

  const orig = h2c.Color.parseColor;
  h2c.Color.parseColor = (v: any, ...rest: any[]) => {
    if (typeof v === "string" && v.trim().startsWith("oklch(")) {
      console.debug("[h2c‑patch] converting", v);
      v = ok2rgb(v);
    }
    return orig(v, ...rest);
  };
  h2c.Color.__oklchPatched = true;
  console.debug("[h2c‑patch] parser patched ✔");
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

/* public API */
export async function exportResumePdf(file = "resume.pdf") {
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("#resume-preview not found");

  /* 1️⃣  scrub live node */
  scrub(src);

  /* 2️⃣  dynamically load html2canvas, patch it, and remember it */
  const h2cMod = await import(/* webpackChunkName: "html2canvas" */"html2canvas");
  patchH2C(h2cMod.default);

  /* 3️⃣  feed *our* patched copy to jspdf */
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  await pdf.html(src, {
    margin: 24,
    autoPaging: "text",
    html2canvas: {
      scale: 2,
      onclone: (w: any) => scrub(w.document ?? w),
    },
    callback: d => d.save(file),
  });
} 