# Resumaker - AI-Powered Resume Builder

A modern, AI-enhanced resume builder built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **AI Career Co-Pilot**: Integrated Gemini 1.5 Flash AI for resume optimization
- **Modern UI**: Clean, responsive design with dark/light mode
- **Real-time Preview**: See changes as you type
- **PDF Export**: Download your resume as a professional PDF
- **Customizable Templates**: Multiple layout options
- **Mobile Responsive**: Works perfectly on all devices

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
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   **Note:** Make sure to use `NEXT_PUBLIC_GEMINI_API_KEY` (not `GEMINI_API_KEY`) for client-side AI functionality.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## AI Features

The "Hablo!" button tests the AI Career Co-Pilot integration. Click it to experience the AI assistant that helps with:
- Resume bullet point optimization
- Professional summary generation
- Job description tailoring
- Career advice and guidance

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini 1.5 Flash API
- **PDF Generation**: jsPDF
- **Deployment**: Cloudflare Pages

## Project Structure

```
resumaker-next/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── hablo/
│   │   │       └── route.ts          # AI API endpoint
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ResumeGenerator.tsx        # Main resume builder component
│   │   ├── ErrorBoundary.tsx
│   │   └── PDFGenerator.tsx
│   └── types/
│       └── resume.ts                  # TypeScript interfaces
├── public/
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
