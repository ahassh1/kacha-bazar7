import AllProductApi from "@/components/AllProductApi";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import NavLinks from "@/components/NavLinks";

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
         <AllProductApi/>
       </div>
    </div>
  );
}