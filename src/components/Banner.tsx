"use client"
import Image from "next/image";
import HeaderDate from "./HeaderDate";
import { Suspense } from "react";

const Banner = () => {
   const handleScroll = () => {   //handle button click
   // Find the All Products section by its ID
document.getElementById("all-product")?.scrollIntoView({
  behavior: "smooth",
  block: "start",
});
  }
  return (
    <section className="container mx-auto px-4 py-5 sm:py-8 lg:py-10">
      <div className="relative isolate overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-green-50 via-white to-emerald-100/70 px-5 py-8 shadow-sm sm:px-8 sm:py-10 md:px-10 lg:px-14 lg:py-12">
        {/* Decorative gradient circles */}
        <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 -z-10 h-56 w-56 rounded-full bg-green-200/30 blur-3xl" />

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="w-full space-y-4 text-center md:w-1/2 md:text-left">
            <Suspense
              fallback={
                <p className="text-[13px] text-gray-500">...</p>
              }
            >
              <HeaderDate />
            </Suspense>

            <h1 className="text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
              আজকের বাজারের দাম{" "}
              <span className="bg-linear-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
                এক নজরে
              </span>
            </h1>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
              বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
              দামের পরিবর্তন এক জায়গায়।
            </p>

            <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row md:justify-start">
             <button
  type="button"
  onClick={handleScroll}  //call the scroll function
  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-green-700 to-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-200/70 transition hover:-translate-y-0.5 hover:from-green-800 hover:to-emerald-700 sm:text-base"
>
  সব পণ্য দেখুন
  <span aria-hidden="true">→</span>
</button>

              <span className="text-xs text-gray-500 sm:text-sm">
                প্রতিদিনের বাজার, আরও সহজে
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="mx-auto max-w-xs rounded-3xl bg-linear-to-br from-white/70 to-green-100/60 p-3 sm:max-w-sm md:max-w-md">
              <Image
                src="/bazar-hero.png"
                width={500}
                height={500}
                alt="বাজারের পণ্যের ছবি"
                priority
                className="mx-auto h-auto w-full object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;