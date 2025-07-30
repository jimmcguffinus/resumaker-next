import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";

/* public API */
export async function exportResumePdf(file = "resume.pdf") {
  try {
    const src = document.querySelector<HTMLElement>("#resume-preview");
    if (!src) {
      console.error("Resume preview element not found");
      throw new Error("#resume-preview not found");
    }

    console.log("Found resume preview element:", src);
    console.log("Element content length:", src.innerHTML.length);
    console.log("Element text content:", src.textContent?.substring(0, 200));

    // Wait a bit to ensure content is fully rendered
    await new Promise(resolve => setTimeout(resolve, 100));

    // Create a temporary div to ensure proper styling
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = src.innerHTML;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.style.width = '595px'; // A4 width in points
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.color = 'black';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.fontSize = '12px';
    tempDiv.style.lineHeight = '1.4';
    tempDiv.style.padding = '20px';
    
    // Copy computed styles
    const computedStyle = window.getComputedStyle(src);
    tempDiv.style.backgroundColor = computedStyle.backgroundColor;
    tempDiv.style.color = computedStyle.color;
    tempDiv.style.fontFamily = computedStyle.fontFamily;
    tempDiv.style.fontSize = computedStyle.fontSize;
    tempDiv.style.lineHeight = computedStyle.lineHeight;
    
    document.body.appendChild(tempDiv);

    // Create PDF
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    
    try {
      // Use the html method with better options
      await (pdf as any).html(tempDiv, {
        margin: [20, 20, 20, 20],
        autoPaging: "text",
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          logging: true, // Enable logging for debugging
          removeContainer: true,
          foreignObjectRendering: false,
          imageTimeout: 0,
          onclone: (clonedDoc: Document) => {
            // Ensure proper styling in cloned document
            const style = clonedDoc.createElement('style');
            style.textContent = `
              * { 
                font-family: Arial, sans-serif !important; 
                color: #000000 !important;
                background-color: #ffffff !important;
              }
              body { margin: 0; padding: 20px; }
              h1, h2, h3 { color: #000000 !important; }
              p, span, div { color: #000000 !important; }
            `;
            clonedDoc.head.appendChild(style);
          }
        },
        callback: (pdf: jsPDF) => {
          console.log("PDF generated successfully");
          pdf.save(file);
        },
      });
    } catch (htmlError) {
      console.error("HTML to PDF conversion failed:", htmlError);
      
      // Fallback: try to add text content manually
      console.log("Attempting fallback PDF generation...");
      
      const textContent = src.textContent || "No content available";
      const lines = textContent.split('\n').filter(line => line.trim());
      
      let yPosition = 40;
      const lineHeight = 14;
      
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Resume', 40, yPosition);
      yPosition += 30;
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      
      lines.forEach(line => {
        if (yPosition > 750) {
          pdf.addPage();
          yPosition = 40;
        }
        pdf.text(line.trim(), 40, yPosition);
        yPosition += lineHeight;
      });
      
      pdf.save(file);
    } finally {
      // Clean up
      document.body.removeChild(tempDiv);
    }
  } catch (error) {
    console.error("PDF export error:", error);
    throw error;
  }
} 