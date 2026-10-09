import type { IProduct } from "@/types/products";
import AllProduct from "./AllProduct";
import PriceIncrease from "./PriceIncrease";
import PriceDecrease from "./PriceDecrease";

const AllProductApi = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: IProduct[] = await res.json();

  return (
    <>
    <PriceIncrease
     products={products}/>
     <PriceDecrease products={products}/>
    <AllProduct products={products} />
    </>
  );
};

export default AllProductApi;