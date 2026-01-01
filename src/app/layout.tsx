import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vikash Singhal - Full Stack Developer | MERN | Next.js | TypeScript",
  description: "Passionate Full Stack Developer specializing in MERN stack, Next.js, and TypeScript. Creating innovative web applications with modern technologies and exceptional user experiences.",
  keywords: ["Vikash Singhal", "Full Stack Developer", "MERN Stack", "Next.js", "TypeScript", "React", "Node.js", "MongoDB", "Web Developer"],
  authors: [{ name: "Vikash Singhal" }],
  creator: "Vikash Singhal",
  publisher: "Vikash Singhal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avatars.githubusercontent.com/u/128129998?v=4",
    title: "Vikash Singhal - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in MERN stack, Next.js, and TypeScript.",
    siteName: "Vikash Singhal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikash Singhal - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in MERN stack, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
