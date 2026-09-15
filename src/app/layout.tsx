import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { practice } from "@/lib/data/practice";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteTitle = `${practice.name} Berlin | Demo-Website`;
const siteDescription = practice.seoLine;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${practice.name}`,
  },
  description: siteDescription,
  // Demo einer fiktiven Praxis: bewusst vollständig von der Indexierung ausgeschlossen.
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-offwhite text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-5 focus:py-3 focus:text-offwhite"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
