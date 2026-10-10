import type { Metadata } from "next";
import { Noto_Serif_Bengali  } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavLinks from "@/components/NavLinks";
import Marquee from "@/components/Marquee";




const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "BaZarDor is here",
  description: "Kacha bazar is here you can buy any things",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
       className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="sticky top-0 z-50 "> 
        <Header/>
      <NavLinks/>
      </div>
        <Marquee/>
        {children}
        
       <Footer/>
        </body>
    </html>
  );
}
