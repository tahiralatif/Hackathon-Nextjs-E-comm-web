"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cart from "../../public/Buy 2.svg";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface ProductData {
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageURL: string;
  category: string;
  description: string;
  inventory: number;
  tags: string[];
  currentSlug: string; // Add slug to the interface
}

interface ProductCardProps {
  img: string;
  label: string;
  price: number;
  name: string;
  labelColor: string;
  slug: string; // Add slug prop
}

async function getData(): Promise<ProductData[]> {
  const fetchData = await client.fetch(
    `*[_type == "products"][0..7]{
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






const ProductCard = ({
  img,
  label,
  price,
  name,
  labelColor,
  slug, // Receive slug prop
}: ProductCardProps) => (
  <div className="w-full h-auto max-w-[312px] mx-auto relative">
    {/* Product Image */}
    <Image
      src={img}
      alt={name}
      width={312}
      height={312}
      className="w-full h-auto object-cover rounded-lg"
    />
    {/* Label */}
    {label && (
      <button
        className="absolute top-[10px] left-[10px] text-graywhite px-[10px] py-[4px] rounded-sm font-medium"
        style={{ backgroundColor: labelColor }}
      >
        {label}
      </button>
    )}
    {/* Product Info */}
    <div className="flex justify-between items-center mt-[14px]">
      <div>
        <span className="text-[16px] hover:text-[#007580] text-grayscalesblack">
          {name}
        </span>
        <p className="text-grayscalesblack font-bold mt-[6px]">{price}</p>
      </div>
      {/* Add to Cart Button */}
      <div className="hover:bg-buttoncolor hover:font-semibold hover:text-white h-[44px] w-[44px] flex justify-center items-center rounded-sm bg-backgroundcolor transition-all duration-300">
        <Image
          src={Cart}
          alt="Add to Cart"
          width={24}
          height={24}
          className="h-[24px] w-[24px]"
        />
      </div>
    </div>
    {/* Link to Product Details */}
    <Link href={`/Products/${slug}`} className="absolute inset-0"></Link>
  </div>
);

export default function OurProduct() {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setProducts(data);
    }
    fetchData();
  }, []);

  if (!products || products.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1>No Products Available</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-0 mb-[136px] mt-[120px] lg:w-[80%]">
      <h1 className="font-semibold text-[28px] md:text-[34px] text-grayscalesblack text-center pb-[30px]">
        Our Products
      </h1>
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] md:gap-[16px] mt-[20px]">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            img={product.imageURL}
            label={product.badge}
            price={product.price}
            name={product.title}
            labelColor="#00fffd" // Customize this as needed
            slug={product.currentSlug} // Pass the slug to the ProductCard
          />
        ))}
      </div>
    </div>
  );
}
