# Resume Maker - Modern Resume Generator

A **Next.js-based resume generator** that creates professional PDF resumes with a beautiful, modern web interface. Built with TypeScript, React 19, and Tailwind CSS.

![Resume Maker](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.5-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **📝 Real-time Resume Builder** - Live preview as you type
- **🎨 Modern Template** - Clean, professional design with proper typography
- **🌙 Dark/Light Mode** - Toggle between themes
- **📄 Professional PDF Export** - Pixel-perfect PDF generation with @react-pdf/renderer
- **💾 JSON Export** - Save and share resume data
- **📱 Responsive Design** - Works on desktop, tablet, and mobile
- **💾 Local Storage** - Auto-save your progress
- **⚡ Fast & Modern** - Built with Next.js 15 and React 19
- **🔄 Scala Data Import** - Import data from original Scala format
- **🎯 CI/CD Pipeline** - Automatic deployment via Cloudflare Pages

## 🚀 Live Demo

Visit: [resumaker.42-it.com](https://resumaker.42-it.com)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.4.5, React 19.1.0, TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.5
- **Icons**: Lucide React
- **PDF Generation**: @react-pdf/renderer for declarative PDF generation
- **Deployment**: Cloudflare Pages with automatic CI/CD
- **Version Control**: Git & GitHub

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/jimmcguffinus/resumaker-next.git
cd resumaker-next

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🏗️ Project Structure

```
resumaker-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── ResumeGenerator.tsx  # Main resume component
│       ├── ResumeDocument.tsx   # PDF document structure
│       └── PDFDownloadButton.tsx # Client-side PDF export
├── public/
│   └── fonts/                  # Inter font files
├── package.json                # Dependencies
├── next.config.ts             # Next.js config (static export)
└── README.md                  # This file
```

## 🎯 Usage

1. **Fill in your information** - Add personal details, experience, education
2. **Real-time preview** - See changes instantly as you type
3. **Export options**:
   - **PDF**: Download as professional PDF with perfect formatting
   - **JSON**: Save data for later editing
   - **Markdown**: Export as markdown format
4. **Load sample data** - Try the demo with pre-filled content
5. **Import Scala data** - Import from original Scala format

## 📋 Resume Data Model

The app uses a structured data model for resumes:

```typescript
interface Resume {
  header: {
    name: string;
    tagline: string;
    contact: {
      phone: string;
      email: string;
    };
    location: {
      city: string;
      state: string;
    };
  };
  experience: Array<{
    name: string;
    link: string;
    blurb: string;
    tenure: string;
    jobs: Array<{
      title: string;
      description: string;
      skills: string[];
      languages: string[];
    }>;
  }>;
  education: Array<{
    institution: string;
    link: string;
    year: string;
    degree: string;
  }>;
  skills: string[];
  extras: string[];
}
```

## 🔄 Migration from Scala

This project was converted from [Kaden Taylor's original Scala-based resume generator](https://github.com/kadenjtaylor/resumaker.git) that used LaTeX for PDF generation. The migration involved:

### Original Scala Project
- **Language**: Scala with SBT build system
- **PDF Generation**: LaTeX compilation
- **Deployment**: Local builds with `sbt run`
- **UI**: Command-line interface
- **Data Format**: Scala case classes

### Modern Next.js Implementation
- **Frontend**: Scala → Next.js/React with TypeScript
- **PDF Generation**: LaTeX → @react-pdf/renderer (declarative PDF generation)
- **Deployment**: Local build → Cloudflare Pages with automatic CI/CD
- **UI**: Command-line → Modern responsive web interface
- **Data Import**: Scala format → JSON with conversion utilities

### Key Improvements Achieved

- **Real-time preview** instead of command-line editing
- **Modern web UI** with responsive design and dark/light mode
- **Professional PDF generation** using @react-pdf/renderer for pixel-perfect output
- **Auto-save functionality** with local storage
- **Scala data compatibility** for easy migration from the original
- **CI/CD pipeline** with automatic deployments on Git push
- **Client-side rendering** with proper SSG handling for static export
- **Font handling** with Inter fonts and emoji support
- **Professional typography** with proper spacing and visual hierarchy

## 🚀 Deployment

### Cloudflare Pages

The app is deployed on Cloudflare Pages with automatic CI/CD:

1. **Connected to GitHub**: Automatic deployments on push
2. **Build settings**: Next.js framework preset with static export
3. **Custom domain**: resumaker.42-it.com
4. **Zero-downtime deployments**: Instant updates with each push

### Local Development

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
```

## 🔧 PDF Export

The PDF export uses @react-pdf/renderer for declarative PDF generation:

- **Declarative PDF**: React components render directly to PDF
- **Professional typography**: Inter fonts with proper spacing
- **Emoji support**: Full emoji rendering in PDFs
- **Color accuracy**: Perfect color reproduction
- **Responsive layout**: Maintains design across different screen sizes
- **Auto-pagination**: Automatically splits content across pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Authors

**Jim McGuffin** - [GitHub](https://github.com/jimmcguffinus)
- Modern Next.js/React implementation
- PDF generation with @react-pdf/renderer
- Cloudflare Pages deployment
- Real-time web interface

**Kaden Taylor** - [GitHub](https://github.com/kadenjtaylor) - [Original Scala Project](https://github.com/kadenjtaylor/resumaker.git)
- Original Scala-based resume generator
- LaTeX PDF generation system
- Data structure and resume logic
- Inspiration for this modern conversion

## 🙏 Acknowledgments

- **Kaden Taylor** for the original Scala project that inspired this conversion
- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Cloudflare** for the excellent hosting platform and CI/CD
- **@react-pdf/renderer** for declarative PDF generation capabilities
- **Inter font family** for professional typography

---

*This project was a fun conversion from Scala to React/Next.js with Cloudflare CI/CD. We successfully migrated from a command-line LaTeX-based system to a modern web application with real-time preview, professional PDF generation, and automatic deployments. The journey involved solving complex technical challenges like SSG compatibility, font loading, emoji rendering, and achieving pixel-perfect PDF output.*
