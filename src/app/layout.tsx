import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Ariel Meshorer — Software Engineer",
  description: "Software engineering portfolio and blog by Ariel Meshorer.",
  metadataBase: new URL("https://meshorer.dev"),
  openGraph: {
    title: "Ariel Meshorer — Software Engineer",
    description:
      "Software engineer focused on distributed systems, ML infrastructure, and building things that scale.",
    url: "https://meshorer.dev",
    siteName: "Ariel Meshorer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header>
          <div className="container">
            <Link href="/" className="logo">
              Ariel Meshorer
            </Link>
            <nav>
              <Link href="/#about">About</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/#experience">Experience</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div className="container">
            &copy; {new Date().getFullYear()} Ariel Meshorer
          </div>
        </footer>
      </body>
    </html>
  );
}
