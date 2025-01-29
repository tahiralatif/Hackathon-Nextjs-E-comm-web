import { client } from "@/sanity/lib/client";
import Image from "next/image";

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

export default async function ProductDetailsPage({ params }: Params) {
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
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full h-full max-w-screen-xl mx-auto mt-[76px] mb-[300px]">
      <div className="w-[1609px] h-[632.89px] mt-[151px] mx-[30px] md:mx-[80px]">
        <div className="my-[20px] w-[1100px] h-[547px] lg:flex md:flex">
          <div className="w-[733.33px] h-[547.89px] mb-[22px] mt-[22px]">
            <h2 className="text-[#111111] font-medium text-[20px] md:pl-[6px]">
              {product.title}
            </h2>

            <div className="flex items-center mt-[24px] pb-[16px]">
              <Image
                src={product.imageURL}
                alt={product.title}
                width={500}
                height={500}
                className="w-[150px] h-[150px] mr-[30px] mt-[24px]"
              />
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="font-normal text-[16px] text-grayscalesblack pb-4">
                    {product.title}
                  </p>
                  <p className="font-normal text-[16px] text-grayscalesblack pb-4">
                    MRP: ${product.price}
                  </p>
                </div>
                <p className="text-[15px] text-[#757575] font-normal pb-4">
                  {product.category}
                </p>
                <div className="flex gap-x-[50px] mb-[20px]">
                  <p className="text-[#757575] text-[15px] font-normal">
                    Size L
                  </p>
                  <p className="text-[#757575] text-[15px] font-normal">
                    Inventory: {product.inventory}
                  </p>
                </div>
                <div className="flex">
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg mr-4">
                    Add to Cart
                  </button>
                  <button className="px-6 py-3 bg-gray-300 text-black rounded-lg">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-[24px] border-t-2 pt-[16px]">
              <p className="text-[15px] text-[#757575] font-normal pb-4">
                {product.description}
              </p>
            </div>
          </div>

          <div className="w-[390px] h-[295px] mt-[28px] md:mr-[158px] md:pl-[75px]">
            <h2 className="font-medium text-[21px] px-[8px] py-[-1px]">
              Price Summary
            </h2>

            <div className="flex justify-between items-center px-[4px] pt-[37px]">
              <p className="text-[15px] font-normal">Price</p>
              <p className="text-[14px] font-medium text-grayscalesblack">
                ${product.price}
              </p>
            </div>

            <div className="flex justify-between items-center px-[4px] pt-[37px]">
              <p className="text-[15px] font-normal">Discount</p>
              <p className="text-[14px] font-medium text-grayscalesblack">
                ${product.priceWithoutDiscount - product.price}
              </p>
            </div>

            <div className="w-[340.38px] pb-[19px] pt-[19px] flex justify-between border-t-2 border-b-2 mt-[20px]">
              <p>Total</p>
              <p>${product.price}</p>
            </div>
            <button className="w-[334.67px] h-[60px] bg-[#029FAE] hover:bg-[#57bbc4] mt-[32px] px-[101px] mb-[400px] py-[18px] text-[#FAFAFA] rounded-full">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
