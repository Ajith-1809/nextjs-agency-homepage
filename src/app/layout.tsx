import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/theme-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aether Studio",
  description: "We craft premium digital experiences, branding, and web applications that elevate your brand and business.",
  keywords: ["Design Agency", "Web Development", "UI/UX Design", "Branding", "Next.js Agency", "Digital Marketing"],
  authors: [{ name: "Aether Studio" }],
  openGraph: {
    title: "Aether Studio",
    description: "We craft premium digital experiences, branding, and web applications that elevate your brand.",
    type: "website",
    locale: "en_US",
    siteName: "Aether Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether Studio",
    description: "We craft premium digital experiences, branding, and web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
