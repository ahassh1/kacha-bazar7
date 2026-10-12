import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavLinks from "@/components/NavLinks";
import Marquee from "@/components/Marquee";
import { Toaster } from 'react-hot-toast';
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "BaZarDor is here",
  description: "Kacha bazar is here you can buy any things",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html 
    
      lang="bn"
      data-scroll-behavior="smooth"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="sticky top-0 z-50">
          <Header />

          <Suspense fallback={<div className="h-12" />}>
            <NavLinks />
          </Suspense>
        </div>

        <Suspense fallback={<div className="h-8" />}>
          <Marquee />
        </Suspense>

        {children}

        <Footer />
        <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toasterId="default"
  toastOptions={{
  
    className: '',
    duration: 5000,
    removeDelay: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    success: {
      duration: 3000,
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
    error: {
      duration: 4000,
      iconTheme: {
        primary: "#dc2626",
        secondary: "#ffffff",
      },
    },
  }}
/>
      </body>
    </html>
  );
}