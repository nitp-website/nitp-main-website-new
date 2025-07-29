'use client';
import "./globals.css";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Imagefooter from "./components/global/Imagefooter";
import { Suspense } from "react";
import Loading from "./Loading";
import ErrorBoundary from './components/ErrorBoundary';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';




export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="font-sans">
      <Navbar/>
      <ErrorBoundary>
        <Suspense fallback={<Loading/>}>
          <ProgressBar
            height="4px"
            color="#ff6549"
            options={{ showSpinner:true }}
            shallowRouting
          />
          {children}
        </Suspense>
      </ErrorBoundary>
      <Imagefooter/>
      <Footer/>
      </body>
    </html>
  );
}
