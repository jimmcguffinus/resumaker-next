import type { Metadata } from "next";
// Import the 'Inter' font, which is available in Next.js 14
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Use a new variable name
});

export const metadata: Metadata = {
  // You can update this to your app's actual title
  title: "Resume Maker",
  description: "Create a professional resume in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* colour‑emoji font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap" rel="stylesheet" />
      </head>
      {/* Apply the new font variable to the body */}
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
