import jsPDF from 'jspdf';

/**
 * Loads and registers the Symbola emoji font for jsPDF
 * This allows proper rendering of emojis in PDF exports
 */
export const loadEmojiFont = async (): Promise<void> => {
  try {
    // Load the font file
    const response = await fetch('/fonts/Symbola-normal.js');
    if (!response.ok) {
      throw new Error(`Failed to load font: ${response.statusText}`);
    }
    
    const fontData = await response.text();
    
    // Execute the font data to register it with jsPDF
    // The font file contains code that registers the font
    eval(fontData);
    
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
  // Load the emoji font first
  await loadEmojiFont();
  
  // Create jsPDF instance
  const doc = new jsPDF();
  
  // Set the emoji font as default
  doc.setFont('Symbola');
  
  return doc;
};

/**
 * Helper function to safely render text with emojis
 * @param doc - jsPDF instance
 * @param text - Text that may contain emojis
 * @param x - X coordinate
 * @param y - Y coordinate
 */
export const renderTextWithEmojis = (
  doc: jsPDF,
  text: string,
  x: number,
  y: number
): void => {
  // Ensure we're using the emoji font
  doc.setFont('Symbola');
  
  // Render the text (emojis should now display properly)
  doc.text(text, x, y);
};

/**
 * Export resume data to PDF with emoji support
 * @param resumeData - The resume data object
 * @param filename - Output filename (default: 'resume.pdf')
 */
export const exportResumePdf = async (
  resumeData: any,
  filename: string = 'resume.pdf'
): Promise<void> => {
  try {
    const doc = await createPdfWithEmojiSupport();
    
    // Set initial font size and color
    doc.setFontSize(20);
    doc.setTextColor(59, 130, 246); // Blue color
    
    // Header section
    doc.text(resumeData.name || 'John Doe', 20, 30);
    
    doc.setFontSize(12);
    doc.setTextColor(107, 114, 128); // Gray color
    
    // Contact info with emojis
    if (resumeData.email) {
      doc.text(`📧 ${resumeData.email}`, 20, 40);
    }
    if (resumeData.phone) {
      doc.text(`📱 ${resumeData.phone}`, 20, 50);
    }
    if (resumeData.location) {
      doc.text(`📍 ${resumeData.location}`, 20, 60);
    }
    
    let yPosition = 80;
    
    // Experience section
    if (resumeData.experience && resumeData.experience.length > 0) {
      doc.setFontSize(16);
      doc.setTextColor(59, 130, 246);
      doc.text('💼 Experience', 20, yPosition);
      yPosition += 15;
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      
      resumeData.experience.forEach((exp: any) => {
        doc.setFont('Symbola', 'bold');
        doc.text(`${exp.company} - ${exp.title}`, 20, yPosition);
        yPosition += 10;
        
        doc.setFont('Symbola', 'normal');
        doc.text(`${exp.startDate} - ${exp.endDate}`, 20, yPosition);
        yPosition += 10;
        
        if (exp.skills && exp.skills.length > 0) {
          doc.text(exp.skills.join(' • '), 20, yPosition);
          yPosition += 15;
        }
      });
    }
    
    // Education section
    if (resumeData.education && resumeData.education.length > 0) {
      doc.setFontSize(16);
      doc.setTextColor(59, 130, 246);
      doc.text('🎓 Education', 20, yPosition);
      yPosition += 15;
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      
      resumeData.education.forEach((edu: any) => {
        doc.setFont('Symbola', 'bold');
        doc.text(edu.institution, 20, yPosition);
        yPosition += 10;
        
        doc.setFont('Symbola', 'normal');
        doc.text(`${edu.degree} - ${edu.year}`, 20, yPosition);
        yPosition += 15;
      });
    }
    
    // Skills section
    if (resumeData.skills && resumeData.skills.length > 0) {
      doc.setFontSize(16);
      doc.setTextColor(59, 130, 246);
      doc.text('⚡ Skills', 20, yPosition);
      yPosition += 15;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(resumeData.skills.join(' • '), 20, yPosition);
      yPosition += 20;
    }
    
    // Additional Information
    if (resumeData.additionalInfo && resumeData.additionalInfo.length > 0) {
      doc.setFontSize(16);
      doc.setTextColor(59, 130, 246);
      doc.text('🏆 Additional Information', 20, yPosition);
      yPosition += 15;
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      
      resumeData.additionalInfo.forEach((info: string) => {
        doc.text(`🏅 ${info}`, 20, yPosition);
        yPosition += 10;
      });
    }
    
    // Save the PDF
    doc.save(filename);
    console.log(`✅ PDF exported successfully: ${filename}`);
    
  } catch (error) {
    console.error('❌ Failed to export PDF:', error);
    throw error;
  }
}; 