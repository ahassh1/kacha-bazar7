import type { Metadata } from "next";
import { Noto_Serif_Bengali  } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";



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
        {children}
        
        <Banner/>
        </body>
    </html>
  );
}
