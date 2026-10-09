import Image from "next/image";
import HeaderDate from "./HeaderDate";
import { Suspense } from "react";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-5 sm:py-8 lg:py-10">
      <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-green-50 px-5 py-8 sm:px-8 md:flex-row md:px-10 lg:px-14">
        <div className="w-full space-y-4 text-center md:w-1/2 md:text-left">
          <Suspense
                     fallback={<p className="text-[13px] text-gray-500">...</p>}
                   >
                     <HeaderDate/>
                   </Suspense>
          <h1 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="text-sm leading-7 text-gray-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>

          <button className="rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800 sm:text-base">
            সব পণ্য দেখুন
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="/bazar-hero.png"
            width={500}
            height={500}
            alt="বাজারের পণ্যের ছবি"
            priority
            className="mx-auto h-auto w-full max-w-xs object-contain sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;