import React from 'react';
import Image from 'next/image';
import PopularImage1 from "../../public/popularImg1.png";
import PopularImage2 from "../../public/popularimg-2.png";

export default function Popularstyle() {
  return (
    <>
      <div className="w-[95%] max-w-screen-2xl mx-auto h-[638px] mt-[227px] flex justify-center relative">
        {/* Rotated Text */}
        <div className="absolute left-[-270px] top-[46%] transform rotate-[-90deg]">
          <p className="text-[34px] sm:text-[34px] font-medium sm:ml-4  text-grayscalesblack">
            EXPLORE NEW AND POPULAR STYLES
          </p>
        </div>

        {/* Large Image */}
        <div className="w-full sm:w-[635px] h-[648px] mb-4 sm:mb-0">
          <Image
            src={PopularImage1}
            alt="PopularImage1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Smaller Images */}
        <div className="w-full sm:w-[672px] h-[648px] sm:ml-4 flex flex-wrap sm:gap-4 justify-start rounded-sm">
          <div className="w-full sm:w-[312px] h-[312px] mb-4 sm:mb-0">
            <Image
              src={PopularImage2}
              alt="PopularImage2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full sm:w-[312px] h-[312px] mb-4 sm:mb-0">
            <Image
              src={PopularImage2}
              alt="PopularImage2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full sm:w-[312px] h-[312px] mb-4 sm:mb-0">
            <Image
              src={PopularImage2}
              alt="PopularImage2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full sm:w-[312px] h-[312px]">
            <Image
              src={PopularImage2}
              alt="PopularImage2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
