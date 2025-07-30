# Resume Maker - Modern Resume Generator

A **Next.js-based resume generator** that creates professional PDF resumes with a beautiful, modern web interface. Built with TypeScript, React 19, and Tailwind CSS.

![Resume Maker](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **📝 Real-time Resume Builder** - Live preview as you type
- **🎨 Modern Template** - Clean, professional design
- **🌙 Dark/Light Mode** - Toggle between themes
- **📄 PDF Export** - Generate professional PDF resumes (HTML-to-PDF)
- **💾 JSON Export** - Save and share resume data
- **📱 Responsive Design** - Works on desktop, tablet, and mobile
- **💾 Local Storage** - Auto-save your progress
- **⚡ Fast & Modern** - Built with Next.js 15 and React 19
- **🔄 Scala Data Import** - Import data from original Scala format

## 🚀 Live Demo

Visit: [resumemaker.42-it.com](https://resumemaker.42-it.com)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.4.5, React 19.1.0, TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **PDF Generation**: jsPDF with HTML-to-PDF rendering
- **Deployment**: Cloudflare Pages
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
│       └── ResumeGenerator.tsx  # Main resume component
├── lib/
│   └── pdf/
│       └── exportResume.ts     # PDF export functionality
├── public/                     # Static assets
├── scala_resumemaker/          # Original Scala project
├── package.json                # Dependencies
├── next.config.ts             # Next.js config
└── README.md                  # This file
```

## 🎯 Usage

1. **Fill in your information** - Add personal details, experience, education
2. **Real-time preview** - See changes instantly as you type
3. **Export options**:
   - **PDF**: Download as professional PDF (matches UI exactly)
   - **JSON**: Save data for later editing
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

This project was converted from a Scala-based resume generator that used LaTeX for PDF generation. The migration involved:

- **Frontend**: Scala → Next.js/React
- **PDF Generation**: LaTeX → jsPDF (HTML-to-PDF)
- **Deployment**: Local build → Cloudflare Pages
- **UI**: Command-line → Modern web interface
- **Data Import**: Scala format → JSON with conversion utilities

### Key Improvements

- **Real-time preview** instead of command-line editing
- **Modern web UI** with responsive design
- **Client-side PDF generation** using jsPDF
- **Auto-save functionality** with local storage
- **Scala data compatibility** for easy migration

## 🚀 Deployment

### Cloudflare Pages

The app is deployed on Cloudflare Pages with automatic builds from GitHub:

1. **Connected to GitHub**: Automatic deployments on push
2. **Build settings**: Next.js framework preset with static export
3. **Custom domain**: resumemaker.42-it.com

### Local Development

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
```

## 🔧 PDF Export

The PDF export uses jsPDF's HTML-to-PDF functionality to capture the exact UI appearance:

- **HTML-to-PDF**: Renders the live preview directly to PDF
- **Color compatibility**: Handles Tailwind CSS 4.0 color formats
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

## 👨‍💻 Author

**Jim McGuffin** - [GitHub](https://github.com/jimmcguffinus)

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Cloudflare** for the excellent hosting platform
- **Original Scala version** that inspired this conversion
- **jsPDF** for client-side PDF generation capabilities
