import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";

import Footer from "@/components/Footer";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css"; // Swiper v6 이상의 경우

// import required modules

const inter = Inter({ subsets: ["latin"] });

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSansKr.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
