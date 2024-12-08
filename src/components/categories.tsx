import React from 'react';
import Image from 'next/image';
import Categoryimg1 from "../../public/categaory-img1.png";
import Categoryimg2 from "../../public/categoryimg-2.png"
import Categoryimg3 from "../../public/categoryimg3.png"

export default function Categories() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl w-[1190px] h-[508px] ">
        <h1 className="font-semibold text-[34px] text-grayscalesblack pb-[44px]">
          Top Categories
        </h1>
        <div className='flex items-center space-x-[24px] rounded-sm cols-1 sm:mt-[10px]'>
        <div className="relative w-[424px] h-[424px] group overflow-hidden">
         
          <Image
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 rounded-sm"
            src={Categoryimg1}
            alt="Categoryimg1"
          />
        
          <div className="absolute bottom-0 w-full h-[85px] bg-[rgba(0,0,0,0.59)]">
            <p className="text-white text-[20px] font-semibold px-[20px] pt-[16px]">
              Wing Chair
            </p>
            <span className="text-[#f8f3f3] text-[14px] px-[20px] mb-[8px]">
              3,584 Products
            </span>
          </div>
        </div>

        {/* image-2................ */}
        <div className="relative w-[424px] h-[424px] group overflow-hidden ">

          <Image
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 rounded-sm"
            src={Categoryimg2}
            alt="Categoryimg1"
          />
          {/* Bottom Overlay */}
          <div className="absolute bottom-0 w-full h-[85px] bg-[rgba(0,0,0,0.59)]">
            <p className="text-white text-[20px] font-semibold px-[20px] pt-[16px]">
            Wooden Chair
            </p>
            <span className="text-[#f8f3f3] text-[14px] px-[20px] mb-[8px]">
              157 Products
            </span>
          </div>
        </div>

        {/* Image-3......... */}
        <div className="relative w-[424px] h-[424px] group overflow-hidden">
          {/* Image with Animation */}
          <Image
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 rounded-sm"
            src={Categoryimg3}
            alt="Categoryimg1"
          />
          {/* Bottom Overlay */}
          <div className="absolute bottom-0 w-full h-[85px] bg-[rgba(0,0,0,0.59)]">
            <p className="text-white text-[20px] font-semibold px-[20px] pt-[16px]">
              Desk Chair
            </p>
            <span className="text-[#f8f3f3] text-[14px] px-[20px] mb-[8px]">
              154 Products
            </span>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
