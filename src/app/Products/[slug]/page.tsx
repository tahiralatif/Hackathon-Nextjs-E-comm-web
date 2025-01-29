

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Cart from "../../../../public/white-cart.png";
import ProductLists from "@/components/products";


interface ProductDetails {
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageURL: string;
  category: string;
  description: string;
  inventory: number;
  tags: string[];
}

interface Params {
  params: {
    slug: string;
  };
}

export default async function ProductDetailsPage({ params }: Params
  
) {

  
  const { slug } = params;

  // Fetch product details
  const product: ProductDetails | null = await client.fetch(
    `*[_type == "products" && slug.current == $slug][0]{
      title,
      price,
      priceWithoutDiscount,
      badge,
      "imageURL": image.asset->url,
      category,
      description,
      inventory,
      tags
    }`,
    { slug }
  );

  if (!product) {
    return <div className="text-center py-4">Product not found</div>;
  }

  return (
   <div  className="mx-auto max-w-screen-2xl">


<div className=" h-full mt-[142px] mx-auto max-w-5xl space-x-10 mb-[143px] flex flex-col md:flex-row items-center gap-6 ">

{/* Image Div */}
<div className="md:w-[655px] h-[315px] md:h-auto mb-8 md:mb-0">
  <Image
    className="object-cover"
    src={product.imageURL}
    alt={product.title}
    width={600}
    height={500}
  />
</div>

{/* Text Div */}
<div className="text-center md:text-left mt-[50px] md:mt-0">
  <h1 className="text-[40px] md:text-[55px] pt-[20px] font-bold text-grayscalesblack">
    {product.title}
  </h1>
  <button className="bg-[#029FAE] hover:bg-[#54b7c0] text-white px-[13px] pb-[9px] pt-[9px] rounded-3xl w-[118px] mb-[37px]">
    ${product.price}
  </button>
  <hr />
  <p className="w-full md:w-[543px] mt-[37px] text-[#272343]">
    {product.description}
  </p>
  <button className="bg-[#029FAE] hover:bg-[#54b7c0] text-white px-[13px] flex items-center justify-center gap-x-[9px] pb-[9px] pt-[9px] rounded-xl mt-[32px] w-[212px] h-[63px] mb-[37px] mx-auto md:mx-0">
            <Image
              src={Cart}
              alt="Cart"
              className="text-[20px] text-[#FFFF] font-semibold"
            />
            <p className="font-semibold text-[20px] text-[#FFFF]">Add To Cart</p>
          </button>
</div>
</div>
<ProductLists/>
   </div>
  );
}
