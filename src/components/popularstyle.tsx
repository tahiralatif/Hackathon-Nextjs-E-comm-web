"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import PopularImage1 from "../../public/popularImg1.png";
import Link from 'next/link';

interface ProductListData {
  currentSlug: string;
  title: string;
  price: number;
  badge: string;
  imageURL: string;
  category: string;
  description: string;
  inventory: number;
  tags: string[];
}

async function getGalleryProducts(): Promise<ProductListData[]> {
  const fetchData = await client.fetch(
    `*[_type == "products" && "gallery" in tags][2...6]{
      title,
      "currentSlug": slug.current,
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

export default function Popularstyle() {
  const [products, setProducts] = useState<ProductListData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getGalleryProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-[80%] max-w-screen-2xl mx-auto h-auto mt-[50px] lg:mt-[120px] flex flex-col lg:flex-row justify-center relative gap-y-4 lg:gap-x-4">
      {/* Rotated Text */}
      
      <div className="absolute left-[-200px] top-[50%]  transform -translate-y-1/2 rotate-[-90deg] hidden lg:block">
        <p className=" hidden lg:block text-[24px] lg:text-[25px] font-medium text-grayscalesblack">
          EXPLORE NEW AND POPULAR STYLES
        </p>
      </div>
    

      {/* Large Image */}
     
      <div className="w-full lg:w-[645px] h-auto lg:ml-[50px]">
      
        <p className="md:hidden text-center text-[24px] font-bold pb-[16px]"> EXPLORE NEW AND POPULAR STYLES</p>
        <Link  href={`/Products/${products[0]?.currentSlug}`}>
       
        <Image
          src={PopularImage1}
          alt="PopularImage1"
          className="w-full h-auto object-cover rounded-lg"
        />
         </Link>
      </div>

      {/* Smaller Images */}
      <div className="w-full lg:w-[642px] h-auto grid grid-cols-2 gap-4">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="w-full h-auto">
               <Link  href={`/Products/${products[0]?.currentSlug}`}>
              <Image
                src={product.imageURL || "/default-product-image.png"} // Fallback image if imageURL is missing
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg"
                width={300}
                height={300}
              />
              </Link>
            </div>
        
          
          ))
        ) : (
          <p>No gallery items found</p>
        )}
      </div>
     
    </div>
  );
}
