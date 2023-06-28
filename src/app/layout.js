"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Head from "next/head";
// import Script from "next/script";
// import gradientScript from "@/components/gradientHero/gradientjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HypeFarm",
  description:
    "A leading marketing agency specializing in community management and comprehensive marketing services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
