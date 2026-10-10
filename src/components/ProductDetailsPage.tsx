import { IProduct } from "@/types/products";
import Link from "next/link";
import PriceChange from "./PriceChange";

const ProductDetailsPage = ({
  productCategory,
}: {
  productCategory: IProduct;
}) => {
  // Get market prices
  const marketPrices = productCategory.markets ?? [];

  // Find minimum price
  const minPrice = marketPrices.length
    ? Math.min(...marketPrices.map((market) => market.min))
    : 0;

  // Find maximum price
  const maxPrice = marketPrices.length
    ? Math.max(...marketPrices.map((market) => market.max))
    : 0;

  // Calculate average price
  const averagePrice = marketPrices.length
    ? marketPrices.reduce(
        (total, market) => total + (market.min + market.max) / 2,
        0
      ) / marketPrices.length
    : 0;

  // Format Bengali currency
  const formatPrice = (price: number) =>
    price.toLocaleString("bn-BD", {
      maximumFractionDigits: 2,
    });

  return (
    <main className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb navigation links */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500"
      >
        <Link href="/" className="transition hover:text-green-700">
          হোম
        </Link>

        <span aria-hidden="true">/</span>

        <Link
          href={`/category/${productCategory.category}`}
          className="transition hover:text-green-700"
        >
          {productCategory.categoryNameBn}
        </Link>

        <span aria-hidden="true">/</span>

        <span
          className="font-medium text-gray-900"
          aria-current="page"
        >
          {productCategory.nameBn}
        </span>
      </nav>

      {/* Product heading and category */}
      <section className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-3xl sm:text-4xl" aria-hidden="true">
            {productCategory.categoryIcon}
          </span>

          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            {productCategory.nameBn}
          </h1>
        </div>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          প্রতি{" "}
          {productCategory.unit === "kg"
            ? "কেজি"
            : productCategory.unit}{" "}
          · {productCategory.categoryNameBn}
        </p>

        <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-600 sm:text-base">
          গতকালের তুলনায় আজ দাম
          <PriceChange
            today={productCategory.today}
            yesterday={productCategory.yesterday}
          />
        </p>
      </section>

      {/* Today's price highlight */}
      <section className="mb-8 rounded-2xl border border-green-100 bg-linear-to-br from-green-50 to-emerald-100 p-5 sm:p-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-gray-600">
              আজকের দাম
            </p>

            <div className="mt-2 flex flex-wrap items-baseline gap-2">
              <span className="text-4xl font-bold text-gray-900 sm:text-5xl">
                {formatPrice(productCategory.today)}
              </span>

              <span className="text-sm text-gray-600 sm:text-base">
                টাকা /{" "}
                {productCategory.unit === "kg"
                  ? "কেজি"
                  : productCategory.unit}
              </span>
            </div>
          </div>

          <div>
            <PriceChange
              today={productCategory.today}
              yesterday={productCategory.yesterday}
            />

            <p className="mt-1 text-xs text-gray-500">
              গতকালের তুলনায়
            </p>
          </div>
        </div>
      </section>

      {/* Price summary responsive cards */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              সর্বনিম্ন দাম
            </p>

            <p className="mt-2 text-2xl font-bold text-green-700">
              {formatPrice(minPrice)} টাকা
            </p>

            <p className="mt-1 text-sm text-gray-500">
              সবচেয়ে কম দামের বাজার
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              সর্বাধিক দাম
            </p>

            <p className="mt-2 text-2xl font-bold text-red-600">
              {formatPrice(maxPrice)} টাকা
            </p>

            <p className="mt-1 text-sm text-gray-500">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-gray-500">
              গড় দাম
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {formatPrice(averagePrice)} টাকা
            </p>

            <p className="mt-1 text-sm text-gray-500">
              প্রতি{" "}
              {productCategory.unit === "kg"
                ? "কেজি"
                : productCategory.unit}
              -এর হিসাবে
            </p>
          </div>
        </div>
      </section>

      {/* Market price table container */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-160 border-collapse text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-4 font-semibold">
                    বাজার
                  </th>

                  <th className="px-4 py-4 font-semibold">
                    বিভাগ
                  </th>

                  <th className="px-4 py-4 text-right font-semibold">
                    সর্বনিম্ন
                  </th>

                  <th className="px-4 py-4 text-right font-semibold">
                    সর্বাধিক
                  </th>

                  <th className="px-4 py-4 text-right font-semibold">
                    গড়
                  </th>
                </tr>
              </thead>

              {/* Display sorted market rows */}
              <tbody className="divide-y divide-gray-100">
                {marketPrices.length > 0 ? (
                  marketPrices.map((market) => {
                      // Calculate average price
                      const average =
                        (market.min + market.max) / 2;

                      return {
                        ...market,
                        average,
                      };
                    })
                    .sort((firstMarket, secondMarket) => {
                      return (
                        firstMarket.average -
                        secondMarket.average
                      ); // Sort by lowest average
                    })
                    .map((market, index) => (
                      <tr
                        key={`${market.market}-${market.division}`}
                        className={`transition hover:bg-green-50 ${
                          index % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50/60"
                        }`}
                      >
                        <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900">
                          {market.market}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                          {market.division}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-right text-gray-700">
                          {formatPrice(market.min)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-right text-gray-700">
                          {formatPrice(market.max)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-right font-bold text-gray-900">
                          {formatPrice(market.average)} টাকা
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      এই পণ্যের বাজারভিত্তিক দাম পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Category navigation link */}
        <button className="mt-3 text-xs text-gray-800 sm:text-sm bg-gray-200 p-2 rounded-lg hover:bg-sky-100">
          <Link
            href={`/category/${productCategory.category}`}
            className="inline-flex items-center gap-2 transition hover:text-green-700"
          >
            <span>{productCategory.categoryIcon}</span>
            <span>সব. {productCategory.categoryNameBn}</span>
          </Link>
        </button>
      </section>
    </main>
  );
};

export default ProductDetailsPage;