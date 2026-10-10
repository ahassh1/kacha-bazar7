import Image from "next/image";
import { Suspense } from "react";
import HeaderDate from "./HeaderDate";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-emerald-100 bg-linear-to-r from-green-50 via-white to-emerald-50 shadow-sm">
      <div className="container mx-auto flex min-h-14 items-center justify-between px-3 py-1.5 sm:px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-icon.png"
            alt="Logo"
            width={34}
            height={34}
            className="h-8 w-8 sm:h-9 sm:w-9"
          />

          <div>
            <h1 className="text-base font-bold leading-tight text-emerald-800 sm:text-lg">
              বাজার দর
            </h1>

            <Suspense
              fallback={<p className="text-[10px] text-gray-500">...</p>}
            >
              <HeaderDate />
            </Suspense>
          </div>
        </Link>

        <div className="flex items-center gap-2.5">
          <button className="cursor-pointer rounded-lg border border-emerald-200 bg-white/80 px-2.5 py-1 text-xs font-medium text-emerald-800 shadow-sm transition hover:bg-emerald-50 sm:px-3 sm:py-1.5 sm:text-sm">
            সাইন ইন
          </button>

          <button className="cursor-pointer rounded-lg bg-linear-to-r from-green-700 to-emerald-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm shadow-green-200 transition hover:from-green-800 hover:to-emerald-700 sm:px-3 sm:py-1.5 sm:text-sm">
            সাইন আপ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;