"use client";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import dynamic from "next/dynamic";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ headerVariant }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
    }
  }, []);
  const CustomCursor = dynamic(() => import("../components/CustomCursor"), {
    ssr: false,
  });
  const Header = dynamic(() => import("../components/Header"), {
    ssr: false,
  });
  return (
    <>
      <Header variant={headerVariant} />
      <Outlet />
      <CustomCursor />
      <Footer />
    </>
  );
}
