import PriceChange from "./PriceChange";

interface IProduct {
  id: number;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
}

const AllProduct = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const showAllProduct: IProduct[] = await res.json();

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="mb-5">
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
          সব পণ্য
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          মোট {showAllProduct.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
        </p>
      </div>

      <div className="grid grid-cols-1 sm:gap-4 cursor-pointer gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {showAllProduct.map((show) => (
          <div
            key={show.id}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-2xl">
                {show.categoryIcon}
              </div>

              <div className="min-w-0">
                <h2 className="truncate font-bold text-gray-900">
                  {show.nameBn}
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  প্রতি কেজি
                </p>
              </div>
            </div>

            <div className="flex items-end justify-between gap-2 border-t border-gray-100 pt-3">
              <div>
                <p className="text-sm text-gray-500">আজকের দাম</p>

                <h3 className="mt-1 text-2xl font-bold text-green-700">
                  ৳{show.today.toLocaleString("bn-BD")}
                </h3>
              </div>

              <div className="pb-1 text-sm">
                <PriceChange
                  today={show.today}
                  yesterday={show.yesterday}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProduct;