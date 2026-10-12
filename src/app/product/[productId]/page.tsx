import ProductDetailsPage from "@/components/ProductDetailsPage";
import { IProps } from "@/types/products";
import { Suspense } from "react";

const ProductDetailsContent = async ({ params }: IProps) => {
  const { productId } = await params;

  let categoryData = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/bazardor/products/${productId}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products data");
    }

    categoryData = await res.json();
  } catch (error) {
    console.error("Error fetching products data:", error);
  }

  return <ProductDetailsPage productCategory={categoryData} />;
};

const ProductDetails = ({ params }: IProps) => {
  return (
    <div>
      <Suspense fallback={<p>পণ্যের তথ্য লোড হচ্ছে...</p>}>
        <ProductDetailsContent params={params} />
      </Suspense>
    </div>
  );
};

export default ProductDetails;