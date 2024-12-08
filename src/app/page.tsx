import Categories from "@/components/categories";
import ComponiesLogo from "@/components/componieslogo";
import HeroSec from "@/components/hero";
import Navbar from "@/components/navbar";
import OurProduct from "@/components/ourProducts";
import Popularstyle from "@/components/popularstyle";
import ProductLists from "@/components/products";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSec/>
    <ComponiesLogo/>
    <ProductLists/>
    <Categories/>
    <Popularstyle/>
    <OurProduct/>
    </>
  );
}
