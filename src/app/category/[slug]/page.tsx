import ProductCategoryContent from "@/components/ProductCategoryContent";
import { IProps } from "@/types/products";

const ProductCategory = async ({ params }: IProps) => {
  const { slug } = await params;

  let productData = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/bazardor/products?category=${slug}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products data");
    }

    productData = await res.json();
  } catch (error) {
    console.error("Error fetching products data:", error);
  }

  return (
    <div>
      <ProductCategoryContent products={productData} />
    </div>
  );
};

export default ProductCategory;