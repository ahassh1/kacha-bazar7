import ProductDetailsPage from "@/components/ProductDetailsPage";
import { IProps } from "@/types/products";

const ProductDetails = async({params}: IProps) => {
    const {productId} = await params
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
        {
            next: {revalidate: 3600}
        }
    )
    if(!res.ok){
        throw new Error("Failed to fetch this category")
    }
     const categoryData = await res.json()
    return (
        <div>
            <ProductDetailsPage productCategory={categoryData}/>
        </div>
    );
};
 export const instant = false
export default ProductDetails;