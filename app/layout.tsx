import type { Metadata } from "next";
import { Geist, Geist_Mono, Freckle_Face } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const freckleFace = Freckle_Face({
    variable: "--font-freckle-face",
    subsets: ["latin"],
    weight: "400",
  });

export const metadata: Metadata = {
  title: "Cookie Store",
  description: "A simple cookie store built with Next.js 13 and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${freckleFace.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Cookie Store Logo" width={32} height={32} />
            <span className="font-freckle">Cookie Store</span>
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="border px-4 py-2 font-freckle">
              Home
            </Link>
            <Link href="/menu" className="border px-4 py-2 font-freckle">
              Menu
            </Link>
          </div>
         
        </nav>
        {children}
      </body>
    </html>
  );
}
