import Image from "next/image";
import { Suspense } from "react";
import HeaderDate from "./HeaderDate";
const Header = () => {
  return (
    <header className="bg-sky-50">
      <div className="container mx-auto flex min-h-16 items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2 text-center">
          <Image
            src="/logo-icon.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />

          <div className="text-left">
            <h1 className="text-lg font-bold text-green-700">
              বাজার দর
            </h1>

            <Suspense fallback={<p className="text-xs text-gray-500">...</p>}>
              <HeaderDate />
            </Suspense>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn bg-gray-300">
            সাইন ইন
          </button>

          <button className="btn bg-green-700 text-white">
            সাইন আপ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;