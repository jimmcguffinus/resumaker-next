import jsPDF from 'jspdf';

/**
 * Creates a jsPDF instance with better font support
 * @returns Promise<jsPDF> - jsPDF instance
 */
export const createPdfWithEmojiSupport = async (): Promise<jsPDF> => {
  const doc = new jsPDF();
  doc.setFont('helvetica');
  return doc;
};

/**
 * Exports resume data to PDF matching the UI styling
 * @param resumeData - The resume data to export
 * @returns Promise<void>
 */
export const exportResumePdf = async (resumeData: any): Promise<void> => {
  try {
    // Add safety checks
    if (!resumeData) {
      throw new Error('Resume data is required');
    }
    
    if (!resumeData.header) {
      throw new Error('Resume header is required');
    }

    const doc = await createPdfWithEmojiSupport();
    
    // Helper function to safely handle text
    const safeText = (text: string) => {
      return text || '';
    };
    
    // Helper function to clean text for PDF compatibility
    const cleanText = (text: string) => {
      return text.replace(/[^\x00-\x7F]/g, ''); // Remove non-ASCII characters
    };
    
    // Header with UI-matching styling
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(59, 130, 246); // Blue color matching UI
    doc.text(safeText(resumeData.header.name || 'Your Name'), 20, 30);
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(107, 114, 128); // Gray color matching UI
    doc.text(safeText(resumeData.header.tagline || 'Your Professional Title'), 20, 42);
    
    // Contact info with text-based icons (matching UI)
    doc.setFontSize(12);
    doc.setTextColor(107, 114, 128); // Gray color like UI
    doc.setFont('helvetica', 'italic');
    let yPos = 55;
    
    if (resumeData.header.email) {
      doc.text(`[Email] ${cleanText(resumeData.header.email)}`, 20, yPos);
      yPos += 8;
    }
    if (resumeData.header.phone) {
      doc.text(`[Phone] ${cleanText(resumeData.header.phone)}`, 20, yPos);
      yPos += 8;
    }
    if (resumeData.header.city && resumeData.header.state) {
      doc.text(`[Location] ${cleanText(resumeData.header.city)}, ${cleanText(resumeData.header.state)}`, 20, yPos);
      yPos += 15;
    }
    
    // Experience section with text-based icon
    yPos += 10;
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(59, 130, 246);
    doc.text('[Work] Experience', 20, yPos);
    doc.line(20, yPos + 2, 190, yPos + 2);
    yPos += 15;
    
    resumeData.experience.forEach((exp: any, index: number) => {
      if (index > 0) yPos += 5;
      
      // Company name (bold black)
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(safeText(exp.company), 20, yPos);
      
      // Job title (blue)
      doc.setFontSize(12);
      doc.setTextColor(59, 130, 246);
      doc.text(safeText(exp.title), 20, yPos + 8);
      
      // Description if available (gray italic)
      if (exp.jobs && exp.jobs[0] && exp.jobs[0].description) {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(107, 114, 128);
        doc.text(safeText(exp.jobs[0].description), 20, yPos + 16);
        yPos += 8;
      }
      
      // Years (gray)
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(107, 114, 128);
      doc.text(`${safeText(exp.startYear)} - ${safeText(exp.endYear)}`, 20, yPos + 24);
      
      // Skills as simple text (matching UI)
      if (exp.jobs && exp.jobs[0] && exp.jobs[0].skills) {
        yPos += 8;
        const skills = exp.jobs[0].skills.map((s: string) => cleanText(s));
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(skills.join(' | '), 20, yPos + 8);
        yPos += 20;
      } else {
        yPos += 20;
      }
    });
    
    // Education section with text-based icon
    if (resumeData.education && resumeData.education.length > 0) {
      yPos += 10;
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('[Education] Education', 20, yPos);
      yPos += 15;
      
      resumeData.education.forEach((edu: any) => {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text(safeText(edu.institution), 20, yPos);
        
        doc.setFontSize(10);
        doc.setTextColor(59, 130, 246);
        doc.text(safeText(edu.degree), 20, yPos + 8);
        
        doc.setTextColor(107, 114, 128);
        doc.text(`${safeText(edu.startYear)} - ${safeText(edu.endYear)}`, 20, yPos + 16);
        yPos += 25;
      });
    }
    
    // Skills section with text-based icon
    if (resumeData.skills && resumeData.skills.length > 0) {
      yPos += 10;
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('[Skills] Skills', 20, yPos);
      yPos += 15;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const skillsText = resumeData.skills.map((s: string) => cleanText(s)).join(' | ');
      doc.text(safeText(skillsText), 20, yPos);
      yPos += 20;
    }
    
    // Additional Information with text-based icon
    if (resumeData.extras && resumeData.extras.length > 0) {
      yPos += 10;
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('[Info] Additional Information', 20, yPos);
      yPos += 15;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      resumeData.extras.forEach((extra: string) => {
        doc.text(`• ${cleanText(extra)}`, 20, yPos);
        yPos += 8;
      });
    }
    
    // Save the PDF
    doc.save('resume.pdf');
    console.log('✅ PDF exported successfully with UI-matching styling');
    
  } catch (error) {
    console.error('❌ Failed to export PDF:', error);
    throw new Error('Failed to export PDF. Please try again.');
  }
}; 