'use client';
import "./globals.css";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Imagefooter from "./components/global/Imagefooter";
import HiddenBacklinks from "./components/SEO/HiddenBacklinks";
import { Suspense } from "react";
import Loading from "./Loading";
import ErrorBoundary from './components/ErrorBoundary';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Script from "next/script";



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <ProgressBar
              height="4px"
              color="#ff6549"
              options={{ showSpinner: true }}
              shallowRouting
            />
            {children}
          </Suspense>
        </ErrorBoundary>
        <Imagefooter />
        <Footer />
        <Script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&id=2e4d7f2c6a1b935fc09da64e8c71f2c8e4b9a55d7c3f08b61a2de8f47d5b7c6a"
        ></Script>
        {/* SEO Backlinks - Hidden from frontend but crawlable */}
        <HiddenBacklinks />
      </body>
    </html>
  );
}
