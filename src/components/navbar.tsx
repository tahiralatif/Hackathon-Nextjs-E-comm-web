"use client";

import React from "react";
import Image from "next/image";
import Check from "../../public/check 1.svg";
import Icon from "../../public/Logo Icon.png";
import AlertCircle from "../../public/alert-circle 1.svg";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import BuyCart from "../../public/Buy 2.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full top-0 z-[100] bg-white">
        {/* Topbar */}
        <nav className="bg-grayscalesblack h-[45px] w-full">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl px-2 md:px-4 sm:px-6 py-2">
            <div className="flex items-center space-x-1 md:space-x-2">
              <Image src={Check} alt="Check" />
              <p className="text-[10px] text-graywhite md:text-sm">
                Free shipping on all orders over $50
              </p>
            </div>
            <div className="flex items-center gap-1 md:gap-4 text-[#FAFAFA] text-xs sm:text-sm">
              <select className="bg-[#272343] text-[10px] md:text-[14px] text-[#FFFFFF] px-2 py-1 rounded">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
                <option>Urdu</option>
              </select>
              <Link href="faq" className="cursor-pointer hover:underline">
                FAQs
              </Link>
              <div className="flex items-center">
                <Image
                  className="text-[#FFFFFF] md:h-4 md:w-4 mr-2"
                  src={AlertCircle}
                  alt="AlertCircle"
                />
                <p className="cursor-pointer text-[10px] md:text-[16px] hover:underline">Need Help</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="bg-backgroundcolor h-[84px] w-full">
          <nav className="mx-auto max-w-screen-xl flex justify-between items-center px-4 sm:px-6 py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <Image src={Icon} alt="Icon" />
              <p className="text-2xl font-medium ml-2">Comforty</p>
            </div>

            {/* Cart Section */}
            <div className=" lg:flex items-center md:gap-4 ml-[80px] sm:ml-[300px]">
              <div className="flex items-center px-2 py-1 md:py-3 md:px-4 gap-2 bg-graywhite rounded-lg">
                <Link href="cart" className="flex items-center gap-2">
                  <Image className="w-5 h-5" src={BuyCart} alt="BuyCart" />
                  <p className="text-sm font-medium">Cart</p>
                </Link>
                <span className="bg-buttoncolor h-4 w-4 md:h-5 md:w-5 text-center rounded-full text-graywhite text-[10px] md:text-[14px] font-medium">
                  2
                </span>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger className="text-grayscalesblack">
                  <GiHamburgerMenu className="text-xl text-grayscalesblack" />
                </SheetTrigger>
                <SheetContent className="bg-rgba(0, 255, 255, 1) text-white hover:bg-white hover:text-cyan-400 flex flex-col items-start p-4 w-[80%] sm:w-[60%]">
                  <div className="flex items-center py-3 px-4 gap-2">
                    <Image className="w-5 h-5" src={BuyCart} alt="BuyCart" />
                    <p className="text-sm font-medium">Cart</p>
                    <span className="bg-buttoncolor h-5 w-5 text-center rounded-full text-graywhite text-xs font-medium">
                      2
                    </span>
                  </div>
                  <ul className="space-y-4 text-lg font-medium mt-[100px] ml-[100px]">
                    <li className="hover:underline hover:text-buttoncolor">
                      <Link href="#">Home</Link>
                    </li>
                    <li className="hover:underline hover:text-buttoncolor">
                      <Link href="#">Shop</Link>
                    </li>
                    <li className="hover:underline hover:text-buttoncolor">
                      <Link href="#">Product</Link>
                    </li>
                    <li className="hover:underline hover:text-buttoncolor">
                      <Link href="#">Pages</Link>
                    </li>
                    <li className="hover:underline hover:text-buttoncolor">
                      <Link href="#">About</Link>
                    </li>
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </header>

        {/* Navbar */}
        <nav className="hidden lg:block w-full shadow-md border-b-2 border-backgroundcolor ">
          <div className="mx-auto max-w-screen-xl flex justify-between items-center px-4 sm:px-6 py-6">
            {/* Navigation links */}
            <ul className="flex space-x-8 text-lg font-medium text-textcolor">
              <li className="hover:underline hover:text-buttoncolor">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:underline hover:text-buttoncolor">
                <Link href="shop">Shop</Link>
              </li>
              <li className="hover:underline hover:text-buttoncolor">
                <Link href="Products">Product</Link>
              </li>
              <li className="hover:underline hover:text-buttoncolor">
                <Link href="page">Pages</Link>
              </li>
              <li className="hover:underline hover:text-buttoncolor">
                <Link href="about">About</Link>
              </li>
            </ul>

            {/* Contact Information */}
            <div className="flex items-center">
              <Link href="contact" className="text-lg text-[#636270]">Contact:</Link>
              <span className="font-medium text-xl text-grayscalesblack ml-2">
                {"(808) 555-0111"}
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
