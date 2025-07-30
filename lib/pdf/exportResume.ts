import { jsPDF } from "jspdf";

/* ---------- helpers ---------- */

/** Convert any OKLCH colour to rgb() because html2canvas/jsPDF don't
 *  understand OKLCH yet.  If the value is already rgb / rgba / hex etc.
 *  we return it untouched. */
function okLchToRgb(cssColour: string): string {
  if (!cssColour.startsWith("oklch")) return cssColour;

  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = cssColour;           // browser converts OKLCH → rgb()
  return ctx.fillStyle as string;      // e.g. "rgb(37, 99, 235)"
}

/** Scrub the colour‑style properties that trip up jsPDF */
function scrubColours(root: Document | HTMLElement) {
  const nodes = (root instanceof Document ? root.body : root)
    .querySelectorAll<HTMLElement>("*");

  nodes.forEach(el => {
    const cs = getComputedStyle(el);

    // text colour
    el.style.color = okLchToRgb(cs.color);

    // background colour (ignore 'transparent')
    if (cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)")
      el.style.backgroundColor = okLchToRgb(cs.backgroundColor);

    // border colours (only if they exist)
    ["borderColor","borderTopColor","borderRightColor",
     "borderBottomColor","borderLeftColor"]
      .forEach(prop => {
        const val = (cs as any)[prop] as string | undefined;
        if (val) (el.style as any)[prop] = okLchToRgb(val);
      });
  });
}

/* ---------- public API ---------- */

/** Export the #resume-preview element to a paginated PDF that
 *  visually matches the on‑screen card. */
export async function exportResumePdf(filename = "resume.pdf") {
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("❌  #resume-preview element not found.");

  const pdf = new jsPDF({ unit: "pt", format: "a4" });

  await pdf.html(src, {
    margin: 24,
    autoPaging: "text",
    html2canvas: {
      scale: 2,
      /* This callback fires inside html2canvas's *own* clone of the DOM,
         which is the version jsPDF renders.  We scrub that clone so the
         OKLCH values never reach the parser. */
      onclone: (clonedDoc: Document) => scrubColours(clonedDoc)
    },
    callback: doc => doc.save(filename)
  });
} 