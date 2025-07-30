import jsPDF from 'jspdf';

/**
 * Loads and registers the Symbola emoji font for jsPDF
 * This allows proper rendering of emojis in PDF exports
 */
export const loadEmojiFont = async (): Promise<void> => {
  try {
    // Use dynamic import instead of eval to handle ES module syntax
    const fontModule = await import('/fonts/Symbola-normal.js');
    
    // The font module should export a function to register the font
    if (typeof fontModule.default === 'function') {
      fontModule.default(jsPDF);
    } else if (typeof fontModule.registerFont === 'function') {
      fontModule.registerFont(jsPDF);
    } else {
      // Fallback: try to find any function that might register the font
      const fontFunctions = Object.values(fontModule).filter(v => typeof v === 'function');
      if (fontFunctions.length > 0) {
        fontFunctions[0](jsPDF);
      }
    }
    
    console.log('✅ Symbola emoji font loaded successfully');
  } catch (error) {
    console.error('❌ Failed to load emoji font:', error);
    throw error;
  }
};

/**
 * Creates a jsPDF instance with emoji font support
 * @returns Promise<jsPDF> - jsPDF instance with emoji font loaded
 */
export const createPdfWithEmojiSupport = async (): Promise<jsPDF> => {
  const doc = new jsPDF();
  
  try {
    await loadEmojiFont();
    // Set the emoji font as the default
    doc.setFont('Symbola');
    return doc;
  } catch (error) {
    console.warn('⚠️ Falling back to default font (no emoji support)');
    return doc;
  }
};

/**
 * Exports resume data to PDF with emoji support
 * @param resumeData - The resume data to export
 * @returns Promise<void>
 */
export const exportResumePdf = async (resumeData: any): Promise<void> => {
  try {
    const doc = await createPdfWithEmojiSupport();
    
    // Helper function to safely handle text with emojis
    const safeText = (text: string) => {
      return text || '';
    };
    
    // Header with emoji support
    doc.setFontSize(28);
    doc.setFont('Symbola', 'normal');
    doc.setTextColor(59, 130, 246); // Blue color
    doc.text(safeText(resumeData.header.name || 'Your Name'), 20, 30);
    
    doc.setFontSize(16);
    doc.setTextColor(107, 114, 128); // Gray color
    doc.text(safeText(resumeData.header.tagline || 'Your Professional Title'), 20, 42);
    
    // Contact info with emojis
    doc.setFontSize(12);
    doc.setTextColor(75, 85, 99);
    let yPos = 55;
    
    if (resumeData.header.email) {
      doc.text(`📧 ${safeText(resumeData.header.email)}`, 20, yPos);
      yPos += 8;
    }
    if (resumeData.header.phone) {
      doc.text(`📱 ${safeText(resumeData.header.phone)}`, 20, yPos);
      yPos += 8;
    }
    if (resumeData.header.city && resumeData.header.state) {
      doc.text(`📍 ${safeText(resumeData.header.city)}, ${safeText(resumeData.header.state)}`, 20, yPos);
      yPos += 15;
    }
    
    // Experience section
    yPos += 10;
    doc.setFontSize(18);
    doc.setFont('Symbola', 'bold');
    doc.setTextColor(59, 130, 246);
    doc.text('💼 Experience', 20, yPos);
    doc.line(20, yPos + 2, 190, yPos + 2);
    yPos += 15;
    
    resumeData.experience.forEach((exp: any, index: number) => {
      if (index > 0) yPos += 5;
      
      doc.setFontSize(14);
      doc.setFont('Symbola', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(safeText(exp.company), 20, yPos);
      
      doc.setFontSize(12);
      doc.setTextColor(59, 130, 246);
      doc.text(safeText(exp.title), 20, yPos + 8);
      
      doc.setFontSize(10);
      doc.setTextColor(107, 114, 128);
      doc.text(`${safeText(exp.startYear)} - ${safeText(exp.endYear)}`, 20, yPos + 16);
      
      if (exp.jobs && exp.jobs[0] && exp.jobs[0].skills) {
        const skillsText = exp.jobs[0].skills.map((s: string) => safeText(s)).join(' | ');
        doc.text(safeText(skillsText), 20, yPos + 24);
        yPos += 30;
      } else {
        yPos += 20;
      }
    });
    
    // Education section
    if (resumeData.education && resumeData.education.length > 0) {
      yPos += 10;
      doc.setFontSize(18);
      doc.setFont('Symbola', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('🎓 Education', 20, yPos);
      yPos += 15;
      
      resumeData.education.forEach((edu: any) => {
        doc.setFontSize(12);
        doc.setFont('Symbola', 'bold');
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
    
    // Skills section
    if (resumeData.skills && resumeData.skills.length > 0) {
      yPos += 10;
      doc.setFontSize(18);
      doc.setFont('Symbola', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('⚡ Skills', 20, yPos);
      yPos += 15;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const skillsText = resumeData.skills.map((s: string) => safeText(s)).join(' | ');
      doc.text(safeText(skillsText), 20, yPos);
      yPos += 20;
    }
    
    // Additional Information
    if (resumeData.extras && resumeData.extras.length > 0) {
      yPos += 10;
      doc.setFontSize(18);
      doc.setFont('Symbola', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('🏆 Additional Information', 20, yPos);
      yPos += 15;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      resumeData.extras.forEach((extra: string) => {
        doc.text(`🏅 ${safeText(extra)}`, 20, yPos);
        yPos += 8;
      });
    }
    
    // Save the PDF
    doc.save('resume.pdf');
    console.log('✅ PDF exported successfully with emoji support');
    
  } catch (error) {
    console.error('❌ Failed to export PDF:', error);
    throw new Error('Failed to export PDF. Please try again.');
  }
}; 