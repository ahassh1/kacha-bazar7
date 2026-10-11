import { Suspense } from "react";
import AllProductApi from "@/components/AllProductApi";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />

      <div className="mx-auto container">
        <Suspense
          fallback={<div className="p-4">পণ্য লোড হচ্ছে...</div>}
        >
          <AllProductApi />
        </Suspense>
      </div>
    </div>
  );
}