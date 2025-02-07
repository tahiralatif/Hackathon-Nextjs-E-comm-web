'use client';

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import CartIcon from "../../../../public/white-cart.png";
import ProductLists from "@/components/products";
import Swal from "sweetalert2";

interface ProductDetails {
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

interface Params {
  params: {
    slug: string;
  };
}

export default function ProductDetailsPage({ params }: Params) {
  const { slug } = params;
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [cart, setCart] = useState<ProductDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!slug) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct: ProductDetails | null = await client.fetch(
          `*[_type == "products" && slug.current == $slug][0]{
            title,
            price,
            priceWithoutDiscount,
            badge,
            "imageURL": image.asset->url,
            category,
            description,
            inventory,
            tags
          }`,
          { slug }
        );
        if (!fetchedProduct) {
          throw new Error("Product not found");
        }
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [slug]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const handleAddToCart = (product: ProductDetails) => {
    const isAlreadyInCart = cart.some((item) => item.title === product.title);
    if (isAlreadyInCart) {
      Swal.fire({
        position: "top-right",
        icon: "warning",
        title: `${product.title} is already in cart!`,
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    }

    const updatedCart = [...cart, product];
    setCart(updatedCart);

    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart!`,
      showConfirmButton: false,
      timer: 1200,
    });
  };

  if (loading) {
    return <div className="text-center py-10 text-xl font-semibold">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-10 text-xl font-semibold">Product not found</div>;
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
      <div className="mt-24 mb-20 flex flex-col md:flex-row items-center sm:gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image className="rounded-xl shadow-xl transition-transform transform hover:scale-105 ease-in-out" src={product.imageURL} alt={product.title} width={500} height={500} />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          {product.badge && (
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md animate-pulse">{product.badge}</span>
          )}
          <h1 className="text-5xl font-extrabold mt-4 text-gray-800 tracking-tight leading-tight">{product.title}</h1>
          <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
            <span className="text-4xl font-bold text-[#029FAE]">${product.price}</span>
            {product.priceWithoutDiscount > product.price && (
              <span className="text-2xl text-gray-500 line-through">${product.priceWithoutDiscount}</span>
            )}
          </div>
          <p className="text-lg text-gray-700 mt-6 leading-relaxed border-l-4 border-[#029FAE] pl-4">{product.description}</p>
          <p className={`mt-4 font-medium text-sm ${product.inventory > 0 ? "text-green-600" : "text-red-600"}`}>
            {product.inventory > 0 ? `In stock: ${product.inventory} items` : "Out of stock"}
          </p>
          <button
            className="mt-6 flex items-center justify-center rounded-lg gap-3 bg-gradient-to-r from-[#029FAE] to-[#54b7c0] hover:to-[#029FAE] text-white px-6 py-3 shadow-lg text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleAddToCart(product)}
          >
            <Image src={CartIcon} alt="Cart" width={24} height={24} />
            Add To Cart
          </button>
        </div>
      </div>
      <ProductLists />
    </div>
  );
}
