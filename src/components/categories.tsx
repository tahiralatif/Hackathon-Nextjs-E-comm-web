"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface CategoriesData {
  title: string;
  imageURL: string;
  products: number;
  currentSlug: string; // Include currentSlug for dynamic links
}

const Categories = () => {
  const [data, setData] = useState<CategoriesData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "categories"]{
            title,
            "currentSlug": slug.current,
            "imageURL": image.asset->url,
            products
          }`
        );
        setData(result);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1>Loading Categories...</h1>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1>No Categories Available</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-2xl w-[95%] h-auto mt-[50px] px-4">
      <h1 className="font-semibold text-[34px] text-grayscalesblack pb-[44px] lg:pl-[140px]">
        Top Categories
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 lg:mx-[100px]">
        {data.map((category, index) => (
          <Link
            key={index}
            href={`/Products/${category.currentSlug}`} // Dynamic route for category slug
            className="relative w-full sm:w-[48%] md:w-[32%] lg:w-[30%] h-[424px] group overflow-hidden mb-4"
          >
            <Image
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 rounded-sm"
              src={category.imageURL}
              alt={category.title}
              width={500}
              height={424}
            />
            <div className="absolute bottom-0 w-full h-[85px] bg-[rgba(0,0,0,0.59)]">
              <p className="text-white text-[20px] font-semibold px-[20px] pt-[16px]">
                {category.title}
              </p>
              <span className="text-[#f8f3f3] text-[14px] px-[20px] mb-[8px]">
                {category.products} Products
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
