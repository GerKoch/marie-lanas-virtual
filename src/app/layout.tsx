import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import HeaderTop from "@/components/headerTop/HeaderTop";
import WhatsAppComponent from "@/components/whatsAppComponent/WhatsAppComponents";
import Footer from "@/components/footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/navbar/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Marie Lanas | Tienda de lanas y tejidos",
    template: "%s | Marie Lanas",
  },
  description: "Venta online de lanas, ovillos, prendas tejidas y accesorios para el arte de tejer. Envíos a todo el país.",
  keywords: ["lanas", "tienda de lanas", "ovillos", "prendas tejidas", "tejido artesanal", "Marie Lanas", "lanería", "crochet", "accesorios para tejer"],
  metadataBase: new URL("https://www.marielanas.com"),
  robots: "index, follow",
  openGraph: {
    title: "Marie Lanas | Tienda de lanas y tejidos",
    description: "Todo para tejedores y tejedoras: lanas, ovillos, accesorios y más.",
    url: "https://www.marielanas.com",
    siteName: "Marie Lanas",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Marie Lanas - Lanas y tejidos",
      },
    ],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png", rel: "apple-touch-icon" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "google-site-verification": "tblHiMYdoDBrZf_PXtLy2MdI3BbrBarpxV12BqnC5Do",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white w-full overflow-x-hidden`}
      >
        <HeaderTop />
        <Navbar />
        {children}
        <div>
          <WhatsAppComponent />
          <Footer />
        </div>

      </body>
    </html>
  );
}
