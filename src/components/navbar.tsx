"use client"

import React from 'react';
import Image from 'next/image';
import Check from "../../public/check 1.svg";
import Icon from "../../public/Logo Icon.png";
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import BuyCart from "../../public/Buy 2.svg";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <>
      <div>
        {/* Topbar */}
        <nav className='bg-grayscalesblack h-[45px] w-full'>
          <div className='flex justify-between items-center mx-auto max-w-screen-2xl px-4 lg:px-[200px] py-[12px]'>
            <div className='flex gap-2 items-center'>
              <Image src={Check} alt='Check' />
              <p className='text-[13px] text-graywhite'>
                Free shipping on all orders over $50
              </p>
            </div>
            <div className="flex items-center gap-4 text-[#FAFAFA] text-[14px]">
              <select className="bg-[#272343] text-[#FFFFFF] px-2 py-1 rounded">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
                <option>Urdu</option>
              </select>
              <p className="cursor-pointer hover:underline">FAQs</p>
              <p className="cursor-pointer hover:underline">Need Help</p>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className='bg-backgroundcolor h-[84px] w-full'>
          <nav className='mx-auto max-w-screen-2xl flex justify-between items-center px-4 lg:px-[200px] py-[20px]'>
           <div className='flex items-center '>
           <Image src={Icon} alt='Icon' />
           <p className='text-[26px] font-medium ml-2'>Comforty</p>
           </div>
           <div className='w-[120px] h-[44px] ml-[855px]  bg-graywhite rounded-[10px]'>
            {/* cart */}
            <div className='flex items-center py-[11px] px-[16px] gap-x-[8px] '>
              <Image
              className='w-[22px] h-[22px] '
               src={BuyCart} 
               alt='BuyCart'/>
               <p className='text-[12px] font-medium'>Cart</p>
               <span className='bg-buttoncolor h-[20px] w-[16px] text-center rounded-full text-graywhite text-[12px] font-medium'>2</span>
            </div>
           
           </div>


            {/* Mobile Menu */}
            <Sheet>
  <SheetTrigger className='block lg:hidden ml-auto'>
    <GiHamburgerMenu className='text-[24px] text-grayscalesblack' />
  </SheetTrigger>
  <SheetContent className="flex flex-col items-start p-4 w-[80%] sm:w-[60%]">
    <ul className='space-y-4 text-[16px] font-medium text-textcolor'>
      <li className='hover:underline hover:text-buttoncolor'><Link href="#">Home</Link></li>
      <li className='hover:underline hover:text-buttoncolor'><Link href="#">Shop</Link></li>
      <li className='hover:underline hover:text-buttoncolor'><Link href="#">Product</Link></li>
      <li className='hover:underline hover:text-buttoncolor'><Link href="#">Pages</Link></li>
      <li className='hover:underline hover:text-buttoncolor'><Link href="#">About</Link></li>
    </ul>
  </SheetContent>
</Sheet>

          </nav>
          
        </header>

        {/* Navbar */}
        <nav className='w-full border-b-2 border-backgroundcolor lg:block sm:hidden md:block'>
          <div className='mx-auto max-w-screen-2xl flex justify-between items-center px-4 lg:px-[200px] py-[20px]'>
          <div className='flex jus'>
          <ul className='hidden md:flex space-x-[32px] text-[16px] font-medium text-textcolor'>
              <li className='hover:underline'><Link href="#">Home</Link></li>
              <li className='hover:underline'><Link href="#">Shop</Link></li>
              <li className='hover:underline'><Link href="#">Product</Link></li>
              <li className='hover:underline'><Link href="#">Pages</Link></li>
              <li className='hover:underline'><Link href="#">About</Link></li>
            </ul>

            
          </div>
          </div>
        </nav>
      </div>
    </>
  );
}
