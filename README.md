# Resume Maker - Modern Resume Generator

A **Next.js-based resume generator** that creates professional PDF resumes with a beautiful, modern web interface. Built with TypeScript, React 19, and Tailwind CSS.

![Resume Maker](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **📝 Real-time Resume Builder** - Live preview as you type
- **🎨 Multiple Templates** - Modern, Classic, and Minimal styles
- **🌙 Dark/Light Mode** - Toggle between themes
- **📄 PDF Export** - Generate professional PDF resumes
- **💾 JSON Export** - Save and share resume data
- **📱 Responsive Design** - Works on desktop, tablet, and mobile
- **💾 Local Storage** - Auto-save your progress
- **⚡ Fast & Modern** - Built with Next.js 15 and React 19

## 🚀 Live Demo

Visit: [resumemaker.42-it.com](https://resumemaker.42-it.com)

## 🛠️ Tech Stack

- **Framework:** Next.js 15.4.5
- **Language:** TypeScript 5.0
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS 4.0
- **Icons:** Lucide React
- **PDF Generation:** jsPDF
- **Deployment:** Cloudflare Pages

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/jimmcguffinus/resumaker-next.git
cd resumaker-next

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
resumaker-next/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # App layout
│   │   └── globals.css       # Global styles
│   └── components/
│       └── ResumeGenerator.tsx # Main resume component
├── public/                   # Static assets
├── package.json              # Dependencies
├── next.config.ts           # Next.js config
└── README.md               # This file
```

## 🎯 Usage

### Creating Your Resume

1. **Personal Information** - Fill in your name, title, contact details
2. **Experience** - Add work experience with job titles and descriptions
3. **Education** - Include your degrees and institutions
4. **Skills** - List your technical and soft skills
5. **Additional Information** - Add certifications, awards, projects

### Templates

- **Modern** - Clean, professional design with blue accents
- **Classic** - Traditional resume layout
- **Minimal** - Simple, clean design

### Export Options

- **PDF Export** - Download as professional PDF
- **JSON Export** - Save resume data for later editing
- **Local Storage** - Automatically saves your progress

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Key Components

- **ResumeGenerator.tsx** - Main component with form and preview
- **TypeScript Interfaces** - Type-safe resume data model
- **PDF Generation** - Client-side PDF creation with jsPDF
- **Local Storage** - Browser-based data persistence

## 🚀 Deployment

### Cloudflare Pages

This project is deployed on Cloudflare Pages:

1. **Build Command:** `npm run build`
2. **Build Output Directory:** `.next`
3. **Framework Preset:** Next.js

### Custom Domain

- **Production URL:** [resumemaker.42-it.com](https://resumemaker.42-it.com)
- **Auto-deployment** on push to main branch

## 📋 Resume Data Model

```typescript
interface Resume {
  header: {
    name: string;
    tagline: string;
    contact: ContactInfo;
    location: Location;
  };
  experience: Workplace[];
  education: EducationRecord[];
  skills: string[];
  extras: string[];
}
```

## 🔄 Migration from Scala

This project was converted from a Scala-based resume generator that used LaTeX for PDF generation. The Next.js version provides:

- **Better UX** - Real-time preview and instant feedback
- **No Dependencies** - No LaTeX installation required
- **Web Accessible** - Works in any browser
- **Modern Stack** - TypeScript, React 19, Next.js 15

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Jim McGuffin** - [GitHub](https://github.com/jimmcguffinus)

## 🙏 Acknowledgments

- **Original Scala Version** - Inspired by functional programming principles
- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the beautiful styling system
- **Lucide React** - For the beautiful icons

---

⭐ **Star this repository if you find it helpful!**
