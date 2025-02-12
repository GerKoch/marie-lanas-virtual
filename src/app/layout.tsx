import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import HeaderTop from "@/components/headerTop/HeaderTop";
import HeaderMain from "@/components/headerMain/HeaderMain";
import Navbar from "@/components/navbar/Navbar";
import WhatsAppComponent from "@/components/whatsAppComponent/WhatsAppComponents";
import Footer from "@/components/footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar2 from "@/components/navbar/Navbar2";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Marie lanas",
  description: "Tienda virtual de lanas y tejidos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white w-full`}
      >
        <HeaderTop />
        <Navbar2 />
        {children}
        <div>
          <WhatsAppComponent />
          <Footer />
        </div>

      </body>
    </html>
  );
}
