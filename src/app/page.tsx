import { Suspense } from "react";
import AllProductApi from "@/components/AllProductApi";
import Banner from "@/components/Banner";
export default function Home() {
  return (
    <div>
      <Banner />

      <div className="container mx-auto px-4 py-5 sm:px-6">
        <Suspense
          fallback={
            <section className="space-y-5" aria-label="পণ্য লোড হচ্ছে">
              {/* Section heading */}
              <div className="space-y-2">
                <div className="h-6 w-36 animate-pulse rounded-lg bg-gray-200 sm:w-44" />
                <div className="h-3 w-52 animate-pulse rounded bg-gray-100" />
              </div>

              {/* Product skeleton cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="animate-pulse rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-14 w-14 shrink-0 rounded-xl bg-gray-200" />

                      <div className="min-w-0 flex-1 space-y-2">
                        <div className="h-4 w-3/4 rounded bg-gray-200" />
                        <div className="h-3 w-1/2 rounded bg-gray-100" />
                      </div>
                    </div>

                    <div className="mt-4 border-t border-gray-100 pt-4">
                      <div className="h-3 w-20 rounded bg-gray-100" />
                      <div className="mt-2 h-6 w-28 rounded bg-gray-200" />
                      <div className="mt-3 h-2 w-full rounded-full bg-green-100" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          }
        >
          <AllProductApi />
        </Suspense>
      </div>
    </div>
  );
}