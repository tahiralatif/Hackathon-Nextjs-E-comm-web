"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface InstaProductData {
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

async function getGalleryProducts(): Promise<InstaProductData[]> {
  const fetchData = await client.fetch(
    `*[_type == "products" && "instagram" in tags][2..7]{
      title,
      "slug": slug.current,
      price,
      priceWithoutDiscount,
      badge,
      "imageURL": image.asset->url,
      category,
      description,
      inventory,
      tags
    }`
  );
  return fetchData;
}

export default function Newsletter() {
  const [products, setProducts] = useState<InstaProductData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getGalleryProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-[173px] w-full py-[100px] h-auto mx-auto max-w-screen-2xl bg-backgroundcolor">
        {/* Newsletter Section */}
        <div className="w-full max-w-[760px] h-auto mx-auto px-4 sm:px-0">
          <h1 className="font-medium text-[32px] text-center sm:text-[50px] text-grayscalesblack pl-[29px] pb-[40px]">
            Or Subscribe to the Newsletter
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              placeholder="Email Address"
              type="text"
              className="h-[32px] w-full sm:w-[643px] border-b-4 border-[#000000] bg-backgroundcolor outline-none placeholder:text-[16px] placeholder:font-semibold"
            />
            <button className="border-b-4 border-[#000000] outline-none mt-4 sm:mt-0 ml-0 sm:ml-[26px] uppercase text-[16px] font-sans text-[#1E2832] ">
              Submit
            </button>
          </div>
        </div>

        {/* Images Section */}
        <div className="w-full max-w-[1324px] h-auto mt-[70px] mx-auto mb-[100px]">
          <h1 className="text-[32px] sm:text-[50px] font-medium text-grayscalesblack pb-[40px] text-center">
            Follow products and discounts on Instagram
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mx-auto px-4">
            {/* Dynamically Render Images */}
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={index} className="w-full h-[186px]">
                  <Image
                    src={product.imageURL || "/default-product-image.png"} // Fallback if no imageURL
                    alt={product.title}
                    className="w-full h-full object-cover rounded-md"
                    width={300}
                    height={300}
                  />
                </div>
              ))
            ) : (
              <p>No Instagram products found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
