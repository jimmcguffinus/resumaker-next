import { jsPDF } from "jspdf";
import { registerEmojiFont } from "./loadEmojiFont";

/**
 * Export the on-screen preview (#resume-preview) to a paginated PDF that
 * looks exactly like the UI.
 *
 * @param filename name of the downloaded file (default: resume.pdf)
 */
export async function exportResumePdf(filename = "resume.pdf") {
  // 1) Find the preview element (adjust the selector if you rename it)
  const source = document.querySelector("#resume-preview") as HTMLElement | null;
  if (!source) throw new Error("Could not find resume preview in the DOM.");

  // 2) Make sure the emoji font is ready
  await registerEmojiFont();

  // 3) Create the PDF – A4 portrait, points
  const pdf = new jsPDF({
    orientation: "p",
    unit: "pt",
    format: "a4",
  });

  // 4) Render HTML → PDF pages
  await pdf.html(source, {
    // Bigger scale = sharper text/images (2 ~= 300 DPI on most screens)
    html2canvas: { scale: 2 },
    margin: 24,
    autoPaging: "text", // let jsPDF add pages as needed
    callback: (doc) => {
      // 5) Fallback: set Symbola for any future text you might draw manually
      doc.setFont("Symbola", "normal");
      doc.save(filename);
    },
  });
} 