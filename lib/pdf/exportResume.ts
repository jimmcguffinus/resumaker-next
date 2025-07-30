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

    // Create PDF with better settings
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    
    // Enhanced html2canvas options for better rendering
    await pdf.html(src, {
      margin: [20, 20, 20, 20],
      autoPaging: "text",
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        removeContainer: true,
        foreignObjectRendering: false,
        imageTimeout: 0,
        onclone: (clonedDoc) => {
          // Ensure emoji fonts are loaded in the cloned document
          const style = clonedDoc.createElement('style');
          style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap');
            * { font-family: "Noto Color Emoji", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif !important; }
          `;
          clonedDoc.head.appendChild(style);
        }
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