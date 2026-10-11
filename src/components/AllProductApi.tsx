import type { IProduct } from "@/types/products";
import AllProduct from "./AllProduct";
import PriceIncrease from "./PriceIncrease";
import PriceDecrease from "./PriceDecrease";

const AllProductApi = async () => {
  let products: IProduct[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/bazardor/products`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products data");
    }

    products = await res.json();
  } catch (error) {
    console.error("Error fetching products data:", error);
  }

  return (
    <>
      <PriceIncrease products={products} />
      <PriceDecrease products={products} />
      <AllProduct products={products} />
    </>
  );
};

export default AllProductApi;