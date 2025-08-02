# Resumaker - AI-Powered Resume Builder

A modern, AI-enhanced resume builder built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **AI Career Co-Pilot**: Integrated Gemini 1.5 Flash AI for resume optimization
- **Job Posting Analysis**: Paste job listings to automatically tailor your resume
- **Cover Letter Generation**: AI-generated cover letters in Markdown format
- **Persona-Based AI**: Multiple AI personas for different professional contexts
- **Modern UI**: Clean, responsive design with dark/light mode
- **Real-time Preview**: See changes as you type
- **PDF Export**: Download your resume as a professional PDF
- **Customizable Templates**: Multiple layout options
- **Mobile Responsive**: Works perfectly on all devices
- **Accessibility Focused**: High contrast inputs and readable text for all users

## Live Demo

Visit: [resumaker.42-it.com](https://resumaker.42-it.com)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/jimmcguffinus/resumaker-next.git
   cd resumaker-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   **Important:** 
   - Use `GEMINI_API_KEY` (not `NEXT_PUBLIC_GEMINI_API_KEY`) for secure server-side AI functionality
   - For local development: Add to `.env.local` file
   - For production (Cloudflare Pages): Add as environment variable in Cloudflare Pages dashboard

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Use the UI/UX Features

### 🎯 Job Posting Analysis

**What it does:** Automatically tailors your resume to match a specific job posting.

**How to use:**
1. Fill out your resume with your current information
2. Click the **"🎯 Job Match"** button in the header
3. Paste the full job posting text from Indeed, LinkedIn, or any job site
4. Click **"Analyze & Tailor Resume"**
5. The AI will analyze the job posting and automatically update your resume fields to match the requirements
6. Your resume will be prefilled with optimized content that matches the job posting

**Pro tip:** The AI preserves your existing information while enhancing it to better match the job requirements.

### 📝 Cover Letter Generation

**What it does:** Automatically generates a personalized cover letter based on your resume and the job posting.

**How to use:**
1. Use the Job Posting Analysis feature (see above)
2. The AI will generate a cover letter in Markdown format
3. Look for the **"📄 View Cover Letter"** button in the Live Preview section
4. Click it to view the generated cover letter in a modal
5. Use the **"📋 Copy to Clipboard"** button to copy the cover letter text
6. You can also edit the cover letter directly in the main form's "📝 Cover Letter" section

**Cover Letter Features:**
- Generated in Markdown format for professional formatting
- Automatically tailored to the specific job posting
- Connects your experience to the job requirements
- Can be edited and customized further

### ✨ AI Edit Buttons

**What they do:** Enhance specific sections of your resume using AI.

**Available AI Edit buttons:**
- **Experience sections:** Click the pencil icon with "AI Edit" text
- **Education section:** Click the "AI Edit" button
- **Skills section:** Click the "AI Edit" button  
- **Additional Information:** Click the "AI Edit" button
- **Cover Letter:** Click the "AI Edit" button in the cover letter section

**How to use:**
1. Click any "AI Edit" button
2. Select an AI persona from the dropdown (see Personas section below)
3. Click the **"✨ AI"** button in the modal
4. The AI will enhance that specific section
5. Review the changes and click **"Save Changes"**

### 🎭 AI Personas

**What they do:** Different AI personalities that specialize in various professional contexts.

**Available Personas:**
- **Default:** Balanced professional enhancement
- **Senior Developer:** Focuses on technical leadership and architecture
- **Junior Developer:** Emphasizes learning and growth potential
- **Data Scientist:** Highlights analytical and statistical skills
- **Product Manager:** Focuses on product strategy and stakeholder management
- **Designer:** Emphasizes creativity and user experience
- **DevOps Engineer:** Highlights infrastructure and automation skills
- **Full Stack Developer:** Balances frontend and backend expertise
- **Frontend Developer:** Focuses on UI/UX and client-side skills
- **Backend Developer:** Emphasizes server-side and database skills
- **Bubba Johnson:** Casual, down-to-earth professional tone
- **Cletus McCoy:** Friendly, approachable communication style
- **Executive Assistant Pro:** Polished, detail-oriented professional tone

**How to use:**
1. Select a persona from the dropdown in any AI Edit modal
2. The AI will use that persona's style and expertise to enhance your content
3. Different personas work best for different job types and industries

### 📊 Resume Sections

**Contact Information:**
- Fill in your basic contact details
- All fields are automatically saved as you type

**Experience:**
- Add multiple work experiences
- Use the pencil icon with "AI Edit" to enhance individual experiences
- Each experience can be edited independently

**Education:**
- Add your educational background
- Use the "AI Edit" button to enhance descriptions
- Include certifications and relevant coursework

**Skills:**
- List your technical and soft skills
- Use the "AI Edit" button to optimize skill descriptions
- Skills are automatically formatted for professional presentation

**Additional Information:**
- Add any extra relevant information
- Use the "AI Edit" button to enhance descriptions
- Great for projects, awards, or special achievements

**Cover Letter:**
- Automatically generated when using Job Posting Analysis
- Can be manually edited or enhanced with AI
- Supports Markdown formatting for professional presentation

### 🎨 UI Features

**Dark/Light Mode:**
- Toggle between dark and light themes using the theme button
- All content adapts automatically to your preference

**Responsive Design:**
- Works perfectly on desktop, tablet, and mobile
- Fluid layout that adapts to any screen size
- Touch-friendly interface on mobile devices

**Live Preview:**
- See your resume changes in real-time
- Professional formatting that matches the final PDF
- Instant feedback as you edit

**PDF Export:**
- Click the **"📄 Download PDF"** button to download your resume
- Professional formatting optimized for ATS systems
- High-quality output suitable for job applications

### 🔧 Advanced Features

**Import/Export JSON:**
- Export your resume data as JSON for backup
- Import JSON data to restore or share resumes
- Useful for transferring resumes between devices

**Local Storage:**
- Your resume data is automatically saved locally
- No data loss when refreshing the page
- Works offline for editing

**Accessibility:**
- High contrast input fields for better visibility
- Large, readable fonts (16px minimum)
- Clear borders and strong color contrast
- Designed for users with vision impairments

## AI Features

The AI Career Co-Pilot provides intelligent assistance for:

- **Resume Optimization:** Enhance bullet points and descriptions
- **Job Tailoring:** Match your resume to specific job postings
- **Cover Letter Generation:** Create personalized cover letters
- **Professional Summary:** Generate compelling professional summaries
- **Skill Enhancement:** Optimize skill descriptions for ATS systems
- **Career Guidance:** Get professional advice based on your experience

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with Typography plugin
- **AI Integration**: Google Gemini 1.5 Flash API
- **PDF Generation**: jsPDF
- **Markdown Rendering**: react-markdown
- **Deployment**: Cloudflare Pages

## Project Structure

```
resumaker-next/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── hablo/
│   │   │   │   └── route.ts          # AI API endpoint
│   │   │   └── personas/
│   │   │       └── route.ts          # Persona data endpoint
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ResumeGenerator.tsx        # Main resume builder component
│   │   ├── ResumeDocument.tsx         # Resume preview component
│   │   ├── PDFDownloadButton.tsx      # PDF export component
│   │   └── PersonaSelector.tsx        # Persona selection component
│   └── lib/
│       └── persona-loader.ts          # Persona definitions
├── public/
├── personas/                          # Persona documentation
├── next.config.ts                     # Next.js configuration
├── tailwind.config.ts
├── package.json
└── README.md
```

## Deployment

This project is configured for deployment on Cloudflare Pages with dynamic API routes enabled for AI functionality.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

---

*Built with ❤️ using Next.js and AI*
