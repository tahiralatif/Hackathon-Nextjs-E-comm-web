"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

// Define your product data type
interface ProductData {
  id: number;
  slug: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageURL: string;
  category: string;
  description: string;
  inventory: number;
  tags: string[];
  isFavorite: boolean;
  quantity: number;
  name: string;
  size: string;
  imagePath: string;
}

const Product: React.FC = () => {
  const [data, setData] = useState<ProductData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<ProductData[]>([]); // Local cart state

  const getData = async (): Promise<ProductData[]> => {
    return await client.fetch(
      `*[_type == "products"][0..11]{
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
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Retrieve cart items from localStorage on component mount (if any)
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (e: React.MouseEvent, product: ProductData) => {
    e.preventDefault();

    // Add the product to the cart state
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    // Show success message
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} Added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1>Loading Products...</h1>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1>Check your Network</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="font-semibold lg:text-[34px] text-2xl text-gray-800 mb-6 text-center sm:text-left lg:pt-[130px] lg:pl-[20px]">
        All Products
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((val: ProductData, i: number) => (
          <Link href={`/Products/${val.slug}`} key={i}>
            <div className="w-full sm:w-[280px] h-auto mx-auto relative bg-white shadow-md rounded-md p-3 cursor-pointer">
              <Image
                src={val.imageURL}
                alt={val.title}
                width={280}
                height={280}
                className="rounded-md"
              />
              {val.badge && (
                <button
                  className="absolute top-[20px] left-[20px] text-white text-xs px-[8px] py-[4px] rounded-lg"
                  style={{ backgroundColor: "#377c4e" }}
                >
                  {val.badge}
                </button>
              )}
              <div className="flex justify-between items-center mt-2">
                <div>
                  <span className="text-sm font-medium hover:text-[#007580] text-gray-800">
                    {val.title}
                  </span>
                  <p className="text-gray-800 font-bold mt-[4px]">
                    {val.price}{" "}
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {val.priceWithoutDiscount}
                    </span>
                  </p>
                </div>
                <div className="h-[36px] w-[36px] flex justify-center items-center rounded-sm bg-gray-200 shadow-lg hover:scale-110 transition-transform hover:bg-teal-600 hover:text-white  duration-300 ease-in-out cursor-pointer">
                  <Image
                    onClick={(e) => handleAddToCart(e, val)}
                    src="/Buy 2.svg"
                    alt="Add to Cart"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
