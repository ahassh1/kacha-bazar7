import ProductCategoryContent from "@/components/ProductCategoryContent";
import { IProps } from "@/types/products";



const ProductCategory = async ({ params }: IProps) => {
  const { slug } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${slug}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const productData = await res.json();

  return (
    <div>
        <ProductCategoryContent products={productData}/>
    </div>
  );
};
export const instant = false;

export default ProductCategory;