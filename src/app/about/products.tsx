"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import { client } from "@/sanity/lib/client";

type AboutProductData = {
  title: string;
  price: number;
  currentSlug: string;
  imageURL: string;
  description: string;
  badge: string;
  category: string;
  tags: string[];
  inventory: number;
};

async function getGalleryProducts(): Promise<AboutProductData[]> {
  const fetchData = await client.fetch(
   `*[_type == "product"]{
  title,
  "currentSlug": slug.current,
  "imageURL": image.asset->url,
  description,
  price,
  badge,
  category,
  tags,
  inventory
}
`
  );
  return fetchData;
}

export default function Products() {
  const [products, setProducts] = useState<AboutProductData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getGalleryProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto max-w-screen-2xl px-4 lg:px-8">
      {/* Heading */}
      <h2 className="text-[28px] md:text-[32px] font-semibold mt-[70px] lg:mt-[131px] lg:pl-[90px] text-center lg:text-left">
        Our Popular Products
      </h2>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row lg:gap-[18px] mt-6 lg:mt-10 justify-center items-center">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className={`cursor-pointer w-full ${
                index === 0 ? "lg:w-[630px]" : "lg:w-[305px]"
              } mb-8 lg:mb-0`}
            >
              <div className="h-[375px]">
                <Image
                  src={product.imageURL || "/default-image.jpg"}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-md"
                  width={305}
                  height={375}
                />
              </div>
              <div className="mt-3 text-center lg:text-left">
                <p className="text-[18px] font-normal">{product.title}</p>
                <p className="text-[18px] font-semibold">${product.price}</p>
                <Link href={`/Products/${product.currentSlug}`}>
                  <button className="mt-3 text-[#029FAE]">View Details</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
    </div>
  );
}
