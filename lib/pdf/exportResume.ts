import { jsPDF } from "jspdf";

/* public API */
export async function exportResumePdf(file = "resume.pdf") {
  try {
    const src = document.querySelector<HTMLElement>("#resume-preview");
    if (!src) {
      console.error("Resume preview element not found");
      throw new Error("#resume-preview not found");
    }

    console.log("Found resume preview element:", src);
    console.log("Element content:", src.innerHTML);

    // Create a simple PDF without complex DOM manipulation
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    
    // Use a simpler approach with html2canvas
    await pdf.html(src, {
      margin: [20, 20, 20, 20],
      autoPaging: "text",
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff"
      },
      callback: (pdf) => {
        console.log("PDF generated successfully");
        pdf.save(file);
      },
    });
  } catch (error) {
    console.error("PDF export error:", error);
    throw error;
  }
} 