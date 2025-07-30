import { jsPDF } from "jspdf";

/** Convert OKLCH → rgb() using the browser's colour parser */
function toRGB(css: string): string {
  if (!css.includes("oklch(")) return css;    // already fine
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = css;
  return ctx.fillStyle as string;             // rgb(r g b)
}

/** Recursively normalise every colour‑like CSS value on the element tree */
function scrubColours(el: HTMLElement) {
  const cs = getComputedStyle(el);

  // iterate over *all* properties – 300‑ish; cheap enough
  for (let i = 0; i < cs.length; i++) {
    const prop = cs.item(i);
    const val  = cs.getPropertyValue(prop);
    if (val.includes("oklch(")) {
      el.style.setProperty(prop, toRGB(val), cs.getPropertyPriority(prop));
    }
  }

  // children
  for (const child of Array.from(el.children) as HTMLElement[]) {
    scrubColours(child);
  }
}

/** Export the #resume-preview to PDF */
export async function exportResumePdf(fileName = "resume.pdf") {
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("preview not found");

  /* 1 ‑‑ clone & place off‑screen */
  const clone = src.cloneNode(true) as HTMLElement;
  Object.assign(clone.style, { position: "fixed", left: "-9999px", top: "0" });
  document.body.appendChild(clone);

  /* 2 ‑‑ sanitise every colour value */
  scrubColours(clone);

  /* 3 ‑‑ render */
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  await pdf.html(clone, {
    html2canvas: { scale: 2 },
    margin: 24,
    autoPaging: "text",
    callback: doc => doc.save(fileName),
  });

  document.body.removeChild(clone);
} 