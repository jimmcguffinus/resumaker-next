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

function scrub(root: Document | HTMLElement) {
  (root instanceof Document ? root.body : root)
    .querySelectorAll<HTMLElement>("*")
    .forEach(el => {
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

  /* Scrub the root/background colour as well */
  const rootEl = root instanceof Document ? root.documentElement : root;
  const bg = getComputedStyle(rootEl).backgroundColor;
  if (bg && bg.includes("oklch"))
    (rootEl as HTMLElement).style.backgroundColor = oklchToRgb(bg);
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