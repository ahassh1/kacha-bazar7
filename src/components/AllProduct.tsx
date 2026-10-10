import { IProductType } from "@/types/products";
import AllProductCard from "./AllProductCard";
const AllProduct = ({ products }: IProductType) => {
  return (
    <section id="all-product" className="px-4 py-6">
      <div className="mb-5">
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
          সব পণ্য
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          মোট {products.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
        </p>
      </div>

      <div className="grid grid-cols-1 cursor-pointer gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {products.map((show) => (
         <AllProductCard key={show.id} show={show}/>
        ))}
      </div>
    </section>
  );
};

export default AllProduct;
