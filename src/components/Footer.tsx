const Footer = () => {
  return (
   <footer className="relative mt-10 overflow-hidden bg-linear-to-br from-green-100 via-emerald-50 to-white text-slate-800">
      {/* Decorative Wave */}
      <div className="absolute left-0 top-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-16 w-full sm:h-24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 35C130 85 210 5 350 30C500 58 570 90 730 40C890 -5 980 65 1110 40C1250 10 1340 15 1440 45V0H0V35Z"
            fill="#FFFFFF"
          />
          <path
            d="M0 35C130 85 210 5 350 30C500 58 570 90 730 40C890 -5 980 65 1110 40C1250 10 1340 15 1440 45"
            stroke="#7DD3FC"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-5 pb-6 pt-24 sm:px-8 sm:pt-28">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 border-b border-green-200 pb-8 md:grid-cols-2 md:items-center md:gap-12">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-green-400 to-blue-600 text-2xl text-white shadow-lg shadow-green-200">
                🛒
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-800">
                  বাজার <span className="text-green-600">দর</span>
                </h2>

                <p className="text-xs tracking-[0.18em] text-green-700">
                  SMART MARKET GUIDE
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
              প্রতিদিনের বাজার সম্পর্কে জানুন, সচেতন থাকুন,
              পরিকল্পিতভাবে কেনাকাটা করুন।
            </p>
          </div>

          {/* Disclaimer */}
          <div className="relative rounded-2xl border border-green-200 bg-linear-to-br from-white/90 to-green-100/80 p-5 shadow-sm sm:p-6">
            <div className="absolute right-5 top-3 text-3xl text-green-300">
              ❝
            </div>

            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <h3 className="text-sm font-bold text-green-800">
                মূল্য সংক্রান্ত বিজ্ঞপ্তি
              </h3>
            </div>

            <p className="pr-5 text-sm leading-7 text-slate-600 sm:text-base">
              সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে
              পরিবর্তিত হয়। দোকান, স্থান, পণ্যের মান ও সময়ভেদে
              প্রকৃত দাম ভিন্ন হতে পারে।
            </p>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © 2026 বাজার দর। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p className="flex items-center gap-2">
            <span className="text-green-500">●</span>
            সঠিক তথ্য, সচেতন বাজার
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;