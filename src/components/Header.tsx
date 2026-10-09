import Image from "next/image";
import { Suspense } from "react";
import HeaderDate from "./HeaderDate";

const Header = () => {
  return (
    <header className="border-b border-sky-100 bg-sky-50">
      <div className="container mx-auto flex min-h-14 items-center justify-between px-3 py-1.5 sm:px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-icon.png"
            alt="Logo"
            width={34}
            height={34}
            className="h-8 w-8 sm:h-9 sm:w-9"
          />

          <div>
            <h1 className="text-base font-bold leading-tight text-green-700 sm:text-lg">
              বাজার দর
            </h1>

            <Suspense
              fallback={<p className="text-[10px] text-gray-500">...</p>}
            >
              <HeaderDate />
            </Suspense>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="cursor-pointer rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition hover:bg-gray-100 sm:px-3 sm:py-1.5 sm:text-sm">
            সাইন ইন
          </button>

          <button className="cursor-pointer rounded-md bg-green-700 px-2.5 py-1 text-xs font-medium text-white transition hover:bg-green-800 sm:px-3 sm:py-1.5 sm:text-sm">
            সাইন আপ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;