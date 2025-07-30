import { jsPDF } from "jspdf";

/** Turn OKLCH → rgb() so html2canvas/jsPDF will accept it. */
function normaliseColour(c: string): string {
  if (!c.startsWith("oklch")) return c;          // already rgb / hex / etc.
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = c;                             // let browser parse
  return ctx.fillStyle as string;                // returns rgb(R,G,B)
}

/** Walk an element tree, inlining rgb() colours everywhere. */
function scrubColours(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("*").forEach(el => {
    const cs = getComputedStyle(el);

    // text colour
    el.style.color = normaliseColour(cs.color);

    // background (skip transparent)
    if (cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)") {
      el.style.backgroundColor = normaliseColour(cs.backgroundColor);
    }

    // border sides
    (["borderColor","borderTopColor","borderRightColor",
      "borderBottomColor","borderLeftColor"] as const).forEach(prop => {
        const v = (cs as any)[prop] as string | undefined;
        if (v) (el.style as any)[prop] = normaliseColour(v);
      });
  });
}

/** Export the visible preview (#resume-preview) to PDF. */
export async function exportResumePdf(filename = "resume.pdf") {
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("Could not find #resume-preview");

  // Clone → off‑screen so we don't flash the UI
  const clone = src.cloneNode(true) as HTMLElement;
  clone.style.position = "fixed";
  clone.style.left = "-9999px";
  document.body.appendChild(clone);

  scrubColours(clone);           // <── critical bit

  try {
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    await pdf.html(clone, {
      html2canvas: { scale: 2 },
      margin: 24,
      autoPaging: "text",
      callback: doc => doc.save(filename),
    });
  } finally {
    document.body.removeChild(clone);
  }
} 