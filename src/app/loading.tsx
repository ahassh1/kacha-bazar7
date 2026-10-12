
export default function Loading() {
  return (
    <main className="mx-auto w-full container flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="space-y-7">
        {/* Shimmer animation */}
        <style>
          {`
            @keyframes market-shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }

            .market-shimmer {
              background: linear-gradient(
                90deg,
                #f1f5f9 25%,
                #ffffff 50%,
                #f1f5f9 75%
              );
              background-size: 200% 100%;
              animation: market-shimmer 1.8s ease-in-out infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .market-shimmer {
                animation: none;
              }
            }
          `}
        </style>

        {/* Page heading */}
        <section className="space-y-3">
          <div className="market-shimmer h-7 w-44 rounded-lg sm:h-9 sm:w-60" />
          <div className="market-shimmer h-4 w-full max-w-sm rounded" />
        </section>

        {/* Hero / banner skeleton */}
        <section className="overflow-hidden rounded-2xl border border-green-100 bg-linear-to-r from-green-50 via-white to-emerald-50 p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex-1 space-y-4">
              <div className="market-shimmer h-4 w-28 rounded-full" />
              <div className="market-shimmer h-8 w-full max-w-md rounded-lg sm:h-10" />
              <div className="market-shimmer h-4 w-full max-w-sm rounded" />
              <div className="market-shimmer h-4 w-3/4 max-w-xs rounded" />
              <div className="market-shimmer h-10 w-36 rounded-lg" />
            </div>

            <div className="flex justify-center sm:pr-4">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-100/80 sm:h-40 sm:w-40">
                <div className="market-shimmer h-20 w-20 rounded-full sm:h-28 sm:w-28" />
              </div>
            </div>
          </div>
        </section>

        {/* Market summary */}
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5"
            >
              <div className="market-shimmer h-4 w-24 rounded" />
              <div className="market-shimmer mt-4 h-7 w-32 rounded-lg" />
              <div className="market-shimmer mt-3 h-3 w-20 rounded" />
            </div>
          ))}
        </section>

        {/* Product section heading */}
        <section>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="space-y-2">
              <div className="market-shimmer h-6 w-36 rounded-lg sm:w-48" />
              <div className="market-shimmer h-3 w-44 rounded" />
            </div>
            <div className="market-shimmer h-9 w-24 rounded-lg sm:w-32" />
          </div>

          {/* Responsive product cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article
                key={item}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                {/* Product image / icon */}
                <div className="border-b border-gray-100 p-4 sm:p-5">
                  <div className="flex items-center gap-4">
                    <div className="market-shimmer h-16 w-16 shrink-0 rounded-xl sm:h-20 sm:w-20" />

                    <div className="min-w-0 flex-1 space-y-3">
                      <div className="market-shimmer h-4 w-3/4 rounded" />
                      <div className="market-shimmer h-3 w-1/2 rounded" />
                      <div className="market-shimmer h-3 w-2/3 rounded" />
                    </div>
                  </div>
                </div>

                {/* Price details */}
                <div className="space-y-4 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="market-shimmer h-3 w-20 rounded" />
                    <div className="market-shimmer h-5 w-16 rounded-full" />
                  </div>

                  <div className="market-shimmer h-7 w-32 rounded-lg" />

                  <div className="flex items-center justify-between gap-3">
                    <div className="market-shimmer h-3 w-24 rounded" />
                    <div className="market-shimmer h-4 w-16 rounded" />
                  </div>

                  <div className="market-shimmer h-2 w-full rounded-full" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Generic content / market table placeholder */}
        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="border-b border-gray-100 p-4 sm:p-5">
            <div className="market-shimmer h-6 w-44 rounded-lg" />
          </div>

          <div className="space-y-0">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-gray-100 p-4 last:border-b-0 sm:p-5"
              >
                <div className="market-shimmer h-10 w-10 shrink-0 rounded-lg" />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="market-shimmer h-4 w-2/3 max-w-xs rounded" />
                  <div className="market-shimmer h-3 w-1/2 max-w-sm rounded" />
                </div>
                <div className="market-shimmer h-5 w-16 shrink-0 rounded sm:w-24" />
              </div>
            ))}
          </div>
        </section>

        {/* Footer spacing */}
        <div className="flex justify-center pb-4 pt-1">
          <div className="market-shimmer h-3 w-32 rounded" />
        </div>
      </div>
    </main>
  );
}