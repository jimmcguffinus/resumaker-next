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

  // 2) Create a clone for PDF export with standard colors
  const pdfElement = source.cloneNode(true) as HTMLElement;
  pdfElement.style.position = 'absolute';
  pdfElement.style.left = '-9999px';
  pdfElement.style.top = '0';
  pdfElement.style.width = '800px';
  pdfElement.style.backgroundColor = '#ffffff';
  pdfElement.style.color = '#000000';
  
  // 3) Override all colors to standard hex values
  const allElements = pdfElement.querySelectorAll('*');
  allElements.forEach((el: Element) => {
    const element = el as HTMLElement;
    if (element.style.color) {
      element.style.color = '#000000';
    }
    if (element.style.backgroundColor) {
      element.style.backgroundColor = '#ffffff';
    }
    if (element.classList.contains('text-blue-600')) {
      element.style.color = '#2563eb';
    }
    if (element.classList.contains('bg-blue-600')) {
      element.style.backgroundColor = '#2563eb';
    }
    if (element.classList.contains('border-blue-600')) {
      element.style.borderColor = '#2563eb';
    }
  });

  // 4) Add to DOM temporarily
  document.body.appendChild(pdfElement);

  try {
    // 5) Create the PDF – A4 portrait, points
    const pdf = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
    });

    // 6) Render HTML → PDF pages
    await pdf.html(pdfElement, {
      // Bigger scale = sharper text/images (2 ~= 300 DPI on most screens)
      html2canvas: { scale: 2 },
      margin: 24,
      autoPaging: "text", // let jsPDF add pages as needed
      callback: (doc) => {
        doc.save(filename);
      },
    });
  } finally {
    // 7) Clean up
    document.body.removeChild(pdfElement);
  }
} 