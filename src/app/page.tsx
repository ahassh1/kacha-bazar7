import AllProduct from "@/components/AllProduct";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import NavLinks from "@/components/NavLinks";
import PriceDecrease from "@/components/PriceDecrease";
import PriceIncrease from "@/components/PriceIncrease";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-50 "> 
        <Header/>
      <NavLinks/>
      </div>
        <Marquee/>
        <Banner/>
       <div className="mx-auto container"> 
         <PriceIncrease/>
         <PriceDecrease/>
         <AllProduct/>
       </div>
    </div>
  );
}