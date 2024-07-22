import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import "../scss/index.scss";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    url: "",
    title: "AKStack - Crafting Digital Experience",
    description: "Software Development Company",
    images: [
      {
        url: "/images/about_hero_bg.jpeg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
      {
        url: "/images/blog_hero_bg.jpeg",
        width: 800,
        height: 600,
        alt: "Og Image Alt 2",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CustomCursor = dynamic(() => import("../components/CustomCursor"), {
    ssr: false,
  });
  const Header = dynamic(() => import("../components/Header"), {
    ssr: false,
  });
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header/>
        <CustomCursor />
        {children}
        <GoogleTagManager gtmId="G-20J3TLGVG4" />
        <Footer copyrightText="" logoSrc="" logoAlt="" text="" />
      </body>
    </html>
  );
}
