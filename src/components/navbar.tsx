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
import { GoSearch } from "react-icons/go";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const { isSignedIn } = useUser(); // Clerk se user ka status check karein

  // Function to update cart count
  const updateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(storedCart.length);
  };

  // Run on mount and listen for cart updates
  useEffect(() => {
    updateCartCount(); // Pehli dafa run karein

    // Custom event listener lagana
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <>
      <div className="fixed w-full top-0 z-[100] bg-white">
        {/* Topbar */}
        <nav className="bg-grayscalesblack h-[45px] w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-8 py-2">
            {/* Left Side - Free Shipping Info */}
            <div className="flex items-center space-x-2">
              <Image src={Check} alt="Check" className="w-4 h-4 md:w-auto md:h-auto" />
              <p className="text-[10px] md:text-sm text-graywhite text-center">
                Free shipping on all orders over $50
              </p>
            </div>

            {/* Right Side - Language, FAQs & Help */}
            <div className="flex items-center gap-2 md:gap-4 text-[#FAFAFA] text-xs md:text-sm">
              {/* Language Dropdown */}
              <select className="bg-[#272343] text-white px-2 py-1 rounded text-xs md:text-sm">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
                <option>Urdu</option>
              </select>

              {/* FAQs Link */}
              <Link href="/faq" className="hover:underline whitespace-nowrap">
                FAQs
              </Link>

              {/* Help Section */}
              <div className="flex items-center gap-1">
                <Image src={AlertCircle} alt="AlertCircle" width={14} height={14} className="md:w-4 md:h-4" />
                <p className="hover:underline text-xs md:text-sm whitespace-nowrap">Need Help</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="bg-backgroundcolor h-[84px] w-full">
          <nav className="mx-auto max-w-screen-xl flex justify-between items-center px-4 md:px-8 py-4">
            {/* Logo Section */}
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image src={Icon} alt="Icon" width={32} height={32} />
                <p className="text-2xl font-medium">Comforty</p>
              </div>
            </Link>

            {/* Center - Search Bar */}
            <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
              <GoSearch className="text-xl text-gray-700" />
              <input
                type="search"
                placeholder="Search Product"
                className="border-b-2 border-gray-700 bg-transparent outline-none text-[16px] font-semibold w-64 lg:w-80 placeholder-gray-500"
              />
            </div>

            {/* Right Side - Cart & Login */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search Icon for Mobile */}
              <div className="lg:hidden">
                <GoSearch className="text-xl text-gray-700" />
              </div>

              {/* Cart */}
              <Link href="/cart" className="flex items-center gap-1 px-2 py-2 bg-graywhite rounded-lg">
                <Image src={BuyCart} alt="BuyCart" width={30} height={30}  />
                <p className="text-sm font-medium hidden md:block">Cart</p>
                <span className=" bg-buttoncolor text-graywhite text-[10px] font-medium rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>

              <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn >
              <UserButton />
            </SignedIn>

              {/* Mobile Menu */}
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger>
                    <GiHamburgerMenu className="text-xl text-grayscalesblack" />
                  </SheetTrigger>
                  <SheetContent className="bg-backgroundcolor text-white flex flex-col p-4 w-[80%] sm:w-[60%]">
                    <Link href="/cart" className="flex items-center gap-2 py-3">
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
            </div>
          </nav>
        </header>

        {/* Navbar */}
        <nav className="hidden lg:block w-full shadow-md border-b-2 border-backgroundcolor">
          <div className="mx-auto max-w-screen-xl flex justify-between items-center px-4 md:px-8 py-4 md:py-6 flex-wrap">
            {/* Navigation links */}
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg font-medium text-textcolor">
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
            <div className="flex items-center gap-2 mt-4 md:mt-0">
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
