'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Img from "../../public/Instagram 1.svg";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "@/app/redux/features/cart-slice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { CartItem } from "@/app/redux/features/cart-slice";
import Swal from "sweetalert2";

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
    `*[_type == "products"][0..4]{
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

  const QuickView = (product: Product) => {

    Swal.fire({
      title: product.title,
      text: product.description,
      imageUrl: product.imageURL,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      confirmButtonColor: "#39bfd6",
      cancelButtonColor: "#f27474",
      confirmButtonText: "Add to Cart",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.isConfirmed) {
        addtoCart(product);
        Swal.fire({
          title: "go to quick view",
          text: "buy now",
          icon: "success",
          confirmButtonColor: "#39bfd6",
        });

      }
    }

  );
  }
  return (
    <div className="mx-auto px-4 max-w-screen-xl">
      {/* Heading */}
      <h1 className="text-[32px] sm:text-[36px] font-bold text-[#272343] mb-8 md:pl-[110px] md:mb-12 text-center md:text-left">
        Featured Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:mx-[80px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200"
          >
            <Link href={`/Products/${product.currentSlug}`}>
              <Image
                src={product.imageURL || Img}
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg"
                width={500}
                height={300}
              />
          
            {product.badge && (
              <span
                className={`absolute top-4 left-4 px-3 py-1 rounded-md font-medium text-white ${
                  product.badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                }`}
              >
                {product.badge}
              </span>
            )}
            <div className="flex flex-col justify-between mt-4">
              <span className="block text-lg font-semibold text-gray-800 hover:text-[#007580]">
                {product.title}
              </span>
              <p className="text-[#272343] font-bold mt-2 text-xl">${product.price}</p>
            </div>

            <button
              onClick={() => QuickView(product)}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#39bfd6] hover:bg-[#58c6da] text-white px-4 py-2 rounded-md shadow-lg transition duration-300 ease-in-out"
            >
              <span className="text-sm font-semibold">Quick View</span>
            </button>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
