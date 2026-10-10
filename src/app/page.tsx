import AllProductApi from "@/components/AllProductApi";
import Banner from "@/components/Banner";
export default function Home() {
  return (
    <div>
        <Banner/>
       <div className="mx-auto container"> 
         <AllProductApi/>
       </div>
    </div>
  );
}