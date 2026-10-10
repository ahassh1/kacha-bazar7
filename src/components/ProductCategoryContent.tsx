// "use client";

// import { useState } from "react";

import AllProductCard from "@/components/AllProductCard";

import { IProduct } from "@/types/products";

interface IProps {
  products: IProduct[];
}

const ProductCategoryContent = ({ products }: IProps) => {
  const category = products[0];

  return (
    <div className="min-h-screen bg-gray-50/80">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Category Header */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-green-100 bg-linear-to-r from-green-50 via-white to-emerald-50 p-5 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm ring-1 ring-green-100 sm:h-20 sm:w-20">
              {category?.categoryIcon}
            </div>

            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                {category?.categoryNameBn}
              </h1>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                এই বিভাগের পণ্যের আজকের দাম ও মূল্য পরিবর্তন দেখুন।
              </p>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                {products.length} টি পণ্য
              </div>
            </div>
          </div>
        </div>

        {/* Product Count and Sorting */}
        <div className="mb-5 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-800">
              সকল পণ্য
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              মোট {products.length} টি পণ্য দেখানো হচ্ছে
            </p>
          </div>

          {/* Sorting Toolbar */}
          <div className="w-full sm:w-auto">
            <fieldset className="fieldset w-full sm:w-56">
              <legend className="fieldset-legend text-gray-600">
                দাম অনুযায়ী সাজান
              </legend>

              <select
                defaultValue="default"
                className="select select-bordered w-full rounded-lg border-gray-200 bg-white focus:border-green-500 focus:outline-none"
              >
                <option value="default">ডিফল্ট</option>
                <option value="low">দাম কম থেকে বেশি</option>
                <option value="high">দাম বেশি থেকে কম</option>
              </select>
            </fieldset>
          </div>
        </div>

        {/* All Product Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {products.map((product) => (
            <AllProductCard key={product.id} show={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryContent;