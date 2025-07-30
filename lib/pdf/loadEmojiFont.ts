import jsPDF from 'jspdf';

/**
 * Loads and registers the Symbola emoji font for jsPDF
 * This allows proper rendering of emojis in PDF exports
 */
export const loadEmojiFont = async (): Promise<boolean> => {
  try {
    // Use fetch to load the font file at runtime
    const response = await fetch('/fonts/Symbola-normal.js');
    if (!response.ok) {
      throw new Error(`Failed to load font: ${response.statusText}`);
    }
    
    const fontData = await response.text();
    
    // Create a script element to execute the font data
    const script = document.createElement('script');
    script.textContent = fontData;
    document.head.appendChild(script);
    
    // Give it a moment to register
    await new Promise(resolve => setTimeout(resolve, 100));
    
    console.log('✅ Symbola emoji font loaded successfully');
    return true;
  } catch (error) {
    console.warn('⚠️ Emoji font not available, using fallback:', error);
    return false;
  }
};

/**
 * Creates a jsPDF instance with emoji font support
 * @returns Promise<jsPDF> - jsPDF instance with emoji font loaded
 */
export const createPdfWithEmojiSupport = async (): Promise<jsPDF> => {
  const doc = new jsPDF();
  
  try {
    const fontLoaded = await loadEmojiFont();
    if (fontLoaded) {
      // Set the emoji font as the default
      doc.setFont('Symbola');
    } else {
      // Fallback to default font
      doc.setFont('helvetica');
    }
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
    
    // Helper function to remove emojis if font not available
    const sanitizeText = (text: string) => {
      return text
        .replace(/[📧📱📍💼🎓⚡🏆🏅•]/g, '') // Remove specific emojis and bullet points
        .replace(/[^\x00-\x7F]/g, ''); // Remove other non-ASCII characters
    };
    
    // Header with emoji support
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(59, 130, 246); // Blue color
    doc.text(safeText(resumeData.header.name || 'Your Name'), 20, 30);
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(107, 114, 128); // Gray color
    doc.text(safeText(resumeData.header.tagline || 'Your Professional Title'), 20, 42);
    
    // Contact info with emojis
    doc.setFontSize(12);
    doc.setTextColor(75, 85, 99);
    let yPos = 55;
    
    if (resumeData.header.email) {
      doc.text(`📧 ${sanitizeText(resumeData.header.email)}`, 20, yPos);
      yPos += 8;
    }
    if (resumeData.header.phone) {
      doc.text(`📱 ${sanitizeText(resumeData.header.phone)}`, 20, yPos);
      yPos += 8;
    }
    if (resumeData.header.city && resumeData.header.state) {
      doc.text(`📍 ${sanitizeText(resumeData.header.city)}, ${sanitizeText(resumeData.header.state)}`, 20, yPos);
      yPos += 15;
    }
    
    // Experience section
    yPos += 10;
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(59, 130, 246);
    doc.text('💼 Experience', 20, yPos);
    doc.line(20, yPos + 2, 190, yPos + 2);
    yPos += 15;
    
    resumeData.experience.forEach((exp: any, index: number) => {
      if (index > 0) yPos += 5;
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(safeText(exp.company), 20, yPos);
      
      doc.setFontSize(12);
      doc.setTextColor(59, 130, 246);
      doc.text(safeText(exp.title), 20, yPos + 8);
      
      doc.setFontSize(10);
      doc.setTextColor(107, 114, 128);
      doc.text(`${safeText(exp.startYear)} - ${safeText(exp.endYear)}`, 20, yPos + 16);
      
      if (exp.jobs && exp.jobs[0] && exp.jobs[0].skills) {
        const skillsText = exp.jobs[0].skills.map((s: string) => sanitizeText(s)).join(' | ');
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
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('🎓 Education', 20, yPos);
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
    
    // Skills section
    if (resumeData.skills && resumeData.skills.length > 0) {
      yPos += 10;
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('⚡ Skills', 20, yPos);
      yPos += 15;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const skillsText = resumeData.skills.map((s: string) => sanitizeText(s)).join(' | ');
      doc.text(safeText(skillsText), 20, yPos);
      yPos += 20;
    }
    
    // Additional Information
    if (resumeData.extras && resumeData.extras.length > 0) {
      yPos += 10;
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(59, 130, 246);
      doc.text('🏆 Additional Information', 20, yPos);
      yPos += 15;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      resumeData.extras.forEach((extra: string) => {
        doc.text(`🏅 ${sanitizeText(extra)}`, 20, yPos);
        yPos += 8;
      });
    }
    
    // Save the PDF
    doc.save('resume.pdf');
    console.log('✅ PDF exported successfully');
    
  } catch (error) {
    console.error('❌ Failed to export PDF:', error);
    throw new Error('Failed to export PDF. Please try again.');
  }
}; 