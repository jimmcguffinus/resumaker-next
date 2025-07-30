import { jsPDF } from "jspdf";

/* --------------------------------------------------------------- */
/* DOM scrubber (belt-and-suspenders) */
function scrub(node: Window | Document | HTMLElement) {
  const doc = toDoc(node);
  if (!doc || !doc.documentElement) return;

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
  const src = document.querySelector<HTMLElement>("#resume-preview");
  if (!src) throw new Error("#resume-preview not found");

  /* scrub live node */
  scrub(src);

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