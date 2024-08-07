'use client';
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Imagefooter from "./components/global/Imagefooter";
import { Suspense } from "react";
import Loading from "./loading";


import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <Suspense fallback={<Loading/>}>
      <ProgressBar
          height="4px"
          color="#ff6549"
          options={{ showSpinner:true }}
          shallowRouting
        />
      {children}
      </Suspense>
      <Imagefooter/>
      <Footer/>
      </body>
    </html>
  );
}
