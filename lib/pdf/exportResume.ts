import { jsPDF } from "jspdf";

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

  // 2) Temporarily override CSS to use standard colors for PDF export
  const originalStyles = source.getAttribute('style') || '';
  source.setAttribute('style', originalStyles + '; * { color: #000000 !important; background-color: #ffffff !important; } .text-blue-600 { color: #2563eb !important; } .bg-blue-600 { background-color: #2563eb !important; } .border-blue-600 { border-color: #2563eb !important; }');

  try {
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
        doc.save(filename);
      },
    });
  } finally {
    // 5) Restore original styles
    source.setAttribute('style', originalStyles);
  }
} 