"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Cart from "../../public/Buy 2.svg";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "@/app/redux/features/cart-slice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { CartItem } from "@/app/redux/features/cart-slice";

// Product type
type Product = {
  currentSlug: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageURL: string;
  category: string;
  description: string;
  inventory: number;
  tags: string[];
};

// Fetch data from Sanity
async function getData(): Promise<Product[]> {
  const fetchData = await client.fetch(
    `*[_type == "products"][0..3]{
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

export default function ProductLists() {
  const [products, setProducts] = useState<Product[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const cartArray: CartItem[] = useSelector(
    (state: RootState) => state.cart
  );

  const addtoCart = (product: Product) => {
    const itemIndex = cartArray.findIndex(
      (item) => item.id === Number(product.currentSlug)
    );

    if (itemIndex !== -1) {
      const updatedCart = cartArray.map((item, index) =>
        index === itemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      dispatch(updateCart(updatedCart));
    } else {
      const newCartItem: CartItem = {
        name: product.title,
        id: Number(product.currentSlug),
        imagePath: product.imageURL,
        price: product.price,
        description: product.description,
        quantity: 1,
        stock: product.inventory, // Include stock
      };

      dispatch(updateCart([...cartArray, newCartItem]));
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="mx-auto px-4 max-w-screen-xl">
      {/* Heading */}
      <h1 className="text-[28px] sm:text-[32px] font-semibold text-[#272343] mb-6 md:pl-[110px] md:mb-10">
        Featured Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:mx-[80px]">
        {products.map((product, index) => (
          <div key={index} className="relative">
            <Link href={`/Products/${product.currentSlug}`}>
              <Image
                src={product.imageURL || "/default-product-image.png"}
                alt={product.title}
                className="w-full h-auto object-cover"
                width={300}
                height={300}
              />
            </Link>
            {product.badge && (
              <button
                className={`absolute top-4 left-4 px-3 py-1 rounded-sm font-medium ${
                  product.badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                }`}
              >
                {product.badge}
              </button>
            )}
            <div className="flex justify-between items-center mt-3">
              <div>
                <span className="block text-[16px] font-medium hover:text-[#007580]">
                  {product.title}
                </span>
                <p className="text-[#272343] font-bold mt-1">${product.price}</p>
              </div>
              <button
                onClick={() => addtoCart(product)}
                className="h-[44px] w-[44px] bg-gray-100 hover:bg-[#01AD5A] p-2 rounded-sm"
              >
                <Image
                  src={Cart}
                  alt="Add to Cart"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}