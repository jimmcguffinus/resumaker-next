import { jsPDF } from "jspdf";

/* ───────── helpers ───────── */

const COLOR_PROPS = [
  // plain colours
  "color",
  "backgroundColor",
  // borders
  "borderColor", "borderTopColor", "borderRightColor",
  "borderBottomColor", "borderLeftColor",
  // outlines & focus rings
  "outlineColor",
  // shadows may include multiple colours → treat as free‑text
  "boxShadow", "textShadow",
  // web‑kit long‑hands (Chrome)
  "WebkitTextDecorationColor",
] as const;

function oklchToRgb(c: string): string {
  if (!c || !c.includes("oklch")) return c;
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = c;                 // browser converts to rgb()
  return ctx.fillStyle as string;    // → "rgb(r,g,b)"
}

function scrub(root: HTMLElement | Document | Window) {
  /* NEW: normalise to a Document */
  const doc =
    root instanceof Window   ? root.document :
    root instanceof Document ? root :
    root.ownerDocument;

  if (!doc) return; // should never happen

  /* 1️⃣ iterate every element inside <body> */
  doc.body.querySelectorAll<HTMLElement>("*").forEach(el => {
    const cs = getComputedStyle(el);
    COLOR_PROPS.forEach(prop => {
      const val = (cs as any)[prop] as string | undefined;
      if (val) {
        const cleaned =
          prop.endsWith("Shadow")           // shadows may embed multiple colours
            ? val.replace(/oklch\([^)]+\)/g, m => oklchToRgb(m))
            : oklchToRgb(val);

        (el.style as any)[prop] = cleaned;
      }
    });
  });

  /* 2️⃣ scrub the root element (:root / <html>) */
  const rootEl = doc.documentElement as HTMLElement;
  const bg = getComputedStyle(rootEl).backgroundColor;
  if (bg && bg.includes("oklch"))
    rootEl.style.backgroundColor = oklchToRgb(bg);
}

/* ───────── export API ───────── */

export async function exportResumePdf(file = "resume.pdf") {
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("#resume-preview not found");

  /* ① clean the live node *before* html2canvas sees it */
  scrub(src);

  const pdf = new jsPDF({ unit: "pt", format: "a4" });

  await pdf.html(src, {
    margin: 24,
    autoPaging: "text",
    html2canvas: {
      scale: 2,
      /* ② clean the internal clone again for good measure */
      onclone: (doc: Document) => scrub(doc),
    },
    callback: doc => doc.save(file),
  });
} 