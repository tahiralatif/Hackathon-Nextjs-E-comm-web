import Categories from "@/components/categories";
import ComponiesLogo from "@/components/componieslogo";
import HeroSec from "@/components/hero";
import OurProduct from "@/components/ourProducts";
import Popularstyle from "@/components/popularstyle";
import ProductLists from "@/components/products";


export default function Home() {
  return (
    <>
    <div className="mx-auto max-w-screen-2xl">
 
    <HeroSec/>
    <ComponiesLogo/>
    <ProductLists/>
    <Categories/>
    <Popularstyle/>
    <OurProduct/>
    </div>
    </>
  );
}
