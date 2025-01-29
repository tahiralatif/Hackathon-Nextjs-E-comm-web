"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Check from "../../public/check 1.svg";
import Icon from "../../public/Logo Icon.png";
import AlertCircle from "../../public/alert-circle 1.svg";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import BuyCart from "../../public/Buy 2.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cartItems = JSON.parse(storedCart);
      setCartCount(cartItems.length);
    }
  }, []);

  return (
    <>
      <div className="fixed w-full top-0 z-[100] bg-white">
        {/* Topbar */}
        <nav className="bg-grayscalesblack h-[45px] w-full">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl px-8 py-2">
            <div className="flex items-center space-x-2">
              <Image src={Check} alt="Check" />
              <p className="text-[10px] text-graywhite md:text-sm">
                Free shipping on all orders over $50
              </p>
            </div>
            <div className="flex items-center gap-4 text-[#FAFAFA] text-sm">
              <select className="bg-[#272343] text-white px-2 py-1 rounded text-sm">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
                <option>Urdu</option>
              </select>
              <Link href="/faq" className="hover:underline">
                FAQs
              </Link>
              <div className="flex items-center gap-1">
                <Image src={AlertCircle} alt="AlertCircle" width={16} height={16} />
                <p className="hover:underline">Need Help</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="bg-backgroundcolor h-[84px] w-full">
          <nav className="mx-auto max-w-screen-xl flex justify-between items-center px-8 py-4">
            {/* Logo Section */}
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image src={Icon} alt="Icon" width={32} height={32} />
                <p className="text-2xl font-medium">Comforty</p>
              </div>
            </Link>

            {/* Cart Section */}
            <div className="flex items-center gap-4">
              <Link href="/cart" className="flex items-center gap-2 px-4 py-2 bg-graywhite rounded-lg">
                <Image src={BuyCart} alt="BuyCart" width={20} height={20} />
                <p className="text-sm font-medium">Cart</p>
                <span className="bg-buttoncolor text-graywhite text-[10px] font-medium rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <GiHamburgerMenu className="text-xl text-grayscalesblack" />
                </SheetTrigger>
                <SheetContent className="bg-backgroundcolor text-white flex flex-col p-4 w-[80%] sm:w-[60%]">
                  <Link href="/cart" className="flex items-center gap-2 py-3 ">
                    <Image src={BuyCart} alt="BuyCart" width={20} height={20} />
                    <p className="text-sm font-medium">Cart</p>
                    <span className="bg-buttoncolor text-graywhite text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  </Link>
                  <ul className="space-y-4 text-lg font-medium mt-8">
                    <li className="hover:underline">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/shop">Shop</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/Products">Product</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/page">Pages</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </header>

        {/* Navbar */}
        <nav className="hidden lg:block w-full shadow-md border-b-2 border-backgroundcolor">
          <div className="mx-auto max-w-screen-xl flex justify-between items-center px-8 py-6">
            {/* Navigation links */}
            <ul className="flex space-x-8 text-lg font-medium text-textcolor">
              <li className="hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:underline">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="hover:underline">
                <Link href="/Products">Product</Link>
              </li>
              <li className="hover:underline">
                <Link href="/page">Pages</Link>
              </li>
              <li className="hover:underline">
                <Link href="/about">About</Link>
              </li>
            </ul>

            {/* Contact Information */}
            <div className="flex items-center gap-2">
              <Link href="/contact" className="text-lg text-[#636270]">
                Contact
              </Link>
              <span className="font-medium text-xl text-grayscalesblack">
                (808) 555-0111
              </span>
            </div>
          </div>
        </nav>
      </div>

      {/* Padding for fixed navbar */}
      <div className="h-[129px]" />
    </>
  );
}
