import type { IProductType } from "@/types/products";
import AllProductCard from "./AllProductCard";

const PriceIncrease = ({ products }: IProductType) => {
  const increasedProducts = products.filter(
    (product) => product.change.dir === "up").sort((a,b)=> b.change.pct - a.change.pct).slice(0,6);  //filter + sort + slice


  return (
    <section className="px-4 py-6 cursor-pointer">
      <div className="mb-5">
        <h1 className="text-lg font-bold md:text-2xl">
          <span className="text-red-500">▲</span> আজ দাম বেড়েছে
        </h1>
      
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {increasedProducts.map((product) => (
          <AllProductCard key={product.id} show={product} />
        ))}
      </div>
    </section>
  );
};
export default PriceIncrease;