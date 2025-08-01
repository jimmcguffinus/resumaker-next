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
    <html lang="en" className="h-full">
      <head>
        {/* colour‑emoji font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap" rel="stylesheet" />
        {/* Add viewport meta tag for better mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      {/* Apply the new font variable to the body and make it full height */}
      <body className={`${inter.variable} antialiased h-full w-full overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
