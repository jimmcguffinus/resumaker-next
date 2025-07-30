import { jsPDF } from "jspdf";

/* ---------- helpers ---------- */

function oklchToRgb(c: string): string {
  if (!c.startsWith("oklch")) return c;
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = c;
  return ctx.fillStyle as string;
}

/** Accept Window | Document | HTMLElement and return its Document */
function toDoc(node: Window | Document | HTMLElement): Document {
  return node instanceof Window
    ? node.document
    : node instanceof Document
      ? node
      : node.ownerDocument!;
}

/** Walk every element (+ :root) and re‑write any OKLCH colours to rgb. */
function scrub(node: Window | Document | HTMLElement) {
  const doc = toDoc(node);

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

/* ---------- public API ---------- */

export async function exportResumePdf(filename = "resume.pdf") {
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("#resume-preview not found");

  /* 1️⃣  Scrub the **live** node before html2canvas clones anything */
  scrub(src);

  const pdf = new jsPDF({ unit: "pt", format: "a4" });

  await pdf.html(src, {
    margin: 24,
    autoPaging: "text",
    html2canvas: {
      scale: 2,
      /* 2️⃣  Scrub html2canvas's internal clone as well */
      onclone: cloneWin => scrub(cloneWin),
    },
    callback: doc => doc.save(filename),
  });
} 