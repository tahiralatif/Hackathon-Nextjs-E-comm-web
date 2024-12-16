import React from "react";
import Image from "next/image";
import Cart from "../../../public/Buy 2.svg";

const products = [
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
  {
    id: 9,
    img: "/productimg1.png",
    label: "New",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "#01AD5A",
  },
  {
    id: 10,
    img: "/prod-2.png",
    label: "Sales",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "#F5813F",
  },
  {
    id: 11,
    img: "/prod-3.png",
    label: "",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "",
  },
  {
    id: 12,
    img: "/prod-4.png",
    label: "",
    price: "$20",
    name: "Library Stool Chair",
    labelColor: "",
  },
];
interface Shop {
  img: string;
  label: string;
  price: string;
  name: string;
  labelColor: string;
}
const ProductCard = ({ img, label, price, name, labelColor }: Shop ) => (
  <div className="w-full sm:w-[280px] h-auto mx-auto relative bg-white shadow-md rounded-md p-3">
    <Image
      src={img}
      alt={name}
      width={280}
      height={280}
      className="rounded-md"
    />
    {label && (
      <button
        className="absolute top-[20px] left-[20px]  text-white text-xs px-[8px] py-[4px] rounded-sm"
        style={{ backgroundColor: labelColor }}
      >
        {label}
      </button>
    )}
    <div className="flex justify-between items-center mt-2">
      <div>
        <span className="text-sm font-medium hover:text-[#007580] text-gray-800">
          {name}
        </span>
        <p className="text-gray-800 font-bold mt-[4px]">{price}</p>
      </div>
      <div className="h-[36px] w-[36px] flex justify-center items-center rounded-sm bg-gray-200 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer">
        <Image src={Cart} alt="Add to Cart" width={20} height={20} />
      </div>
    </div>
  </div>
);

export default function OurProduct() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="font-semibold lg:text-[34px] text-2xl text-gray-800 mb-6 text-center sm:text-left lg:pt-[130px] lg:pl-[20px]">
      Discover Quality Products for You
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
