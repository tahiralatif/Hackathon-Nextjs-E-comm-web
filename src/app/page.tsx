import Categories from "@/components/categories";
import ComponiesLogo from "@/components/componieslogo";
import HeroSec from "@/components/hero";
import OurProduct from "@/components/ourProducts";
import Popularstyle from "@/components/popularstyle";
import ProductLists from "@/components/products";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
    <div className="mx-auto max-w-screen-2xl">

      <Suspense fallback={<div>
        Loading...
      </div>}>
      <HeroSec/>
      </Suspense>
    <Suspense fallback={<div>
      Loading...
    </div>}><ComponiesLogo/></Suspense>


<Suspense fallback={<div> Loading...</div>}><ProductLists/></Suspense>
   <Suspense fallback={<div> Loading...</div>}> <Categories/></Suspense>
   <Suspense fallback={<div> Loading...</div>}>  <Popularstyle/></Suspense>
    <Suspense fallback={<div>Loading...</div>} ><OurProduct/></Suspense>
    </div>
    </>
  );
}
