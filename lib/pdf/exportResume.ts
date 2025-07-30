import { jsPDF } from "jspdf";

function normalizeCssColor(c: string): string {
  // Skip if already rgb/rgba/hex
  if (!c.startsWith("oklch")) return c;

  // Let Chrome convert it for us
  const ctx = document.createElement("canvas").getContext("2d")!;
  ctx.fillStyle = c;                   // browser parses OKLCH
  return ctx.fillStyle as string;      // comes back as rgb(r,g,b)
}

/**
 * Export the on-screen preview (#resume-preview) to a paginated PDF that
 * looks exactly like the UI.
 *
 * @param filename name of the downloaded file (default: resume.pdf)
 */
export async function exportResumePdf(filename = "resume.pdf") {
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("preview not found");

  // Clone node; put it off‑screen
  const clone = src.cloneNode(true) as HTMLElement;
  clone.style.position = "fixed";
  clone.style.left = "-9999px";
  document.body.appendChild(clone);

  /* ── NEW: walk the clone & canonicalise colours ─────────────── */
  clone.querySelectorAll<HTMLElement>("*").forEach(el => {
    const cs = getComputedStyle(el);

    // text colour
    const c = normalizeCssColor(cs.color);
    el.style.color = c;

    // bg colour (only if non‑transparent)
    const bg = cs.backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)") {
      el.style.backgroundColor = normalizeCssColor(bg);
    }

    // border colours
    ["borderColor", "borderTopColor", "borderRightColor",
     "borderBottomColor", "borderLeftColor"].forEach(prop => {
       const v = (cs as any)[prop];
       if (v) (el.style as any)[prop] = normalizeCssColor(v);
     });
  });
  /* ───────────────────────────────────────────────────────────── */

  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  await pdf.html(clone, {
    html2canvas: { scale: 2 },
    margin: 24,
    autoPaging: "text",
    callback: doc => doc.save(filename),
  });

  document.body.removeChild(clone);
} 