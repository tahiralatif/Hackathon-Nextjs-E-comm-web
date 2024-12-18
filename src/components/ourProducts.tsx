import React from "react";
import Image from "next/image";
import Cart from "../../public/Buy 2.svg";

interface Product {
  id: number;
  img: string;
  label: string;
  price: string;
  name: string;
  labelColor: string;
}

const products: Product[] = [
  {
    id: 1,
    img: "/productimg1.png",
    label: "New",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "#01AD5A",
  },
  {
    id: 2,
    img: "/prod-2.png",
    label: "Sales",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "#F5813F",
  },
  {
    id: 3,
    img: "/prod-3.png",
    label: "",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "",
  },
  {
    id: 4,
    img: "/prod-4.png",
    label: "",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "",
  },
  {
    id: 5,
    img: "/our-prodimg-4.png",
    label: "",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "",
  },
  {
    id: 6,
    img: "/popularImg1.png",
    label: "",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "",
  },
  {
    id: 7,
    img: "/popularimg-2.png",
    label: "",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "",
  },
  {
    id: 8,
    img: "/popular-img-3.png",
    label: "",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "",
  },
];

interface ProductCardProps {
  img: string;
  label: string;
  price: string;
  name: string;
  labelColor: string;
}

const ProductCard = ({ img, label, price, name, labelColor }: ProductCardProps) => (
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
  </div>
);

export default function OurProduct() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-0 mb-[136px] mt-[120px] lg:w-[80%]">
      <h1 className="font-semibold text-[28px] md:text-[34px] text-grayscalesblack text-center pb-[30px]">
        Our Products
      </h1>
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] md:gap-[16px] mt-[20px]">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
