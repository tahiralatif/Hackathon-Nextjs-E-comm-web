import React from "react";
import Image from "next/image";
import LargeImg from "../../../public/Large.jpg";
import Parent from "../../../public/Parent.png";
import Photo from "../../../public/Photo.png";

export default function Products() {
  return (
    <div className="w-full mx-auto max-w-screen-2xl px-4 lg:px-8">
      {/* Heading */}
      <h2 className="text-[28px] md:text-[32px] font-semibold mt-[70px] lg:mt-[131px] lg:pl-[90px] text-center lg:text-left ">
          Our Popular Products
        </h2>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row lg:gap-[18px] mt-6 lg:mt-10 justify-center items-center">
        {/* Product 1 */}
        <div className="w-full lg:w-[630px] mb-8 lg:mb-0">
          <Image
            src={LargeImg}
            alt="The Poplar suede sofa"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="mt-3 text-center lg:text-left">
            <p className="text-[18px] font-normal">The Poplar suede sofa</p>
            <p className="text-[18px] font-semibold">$99.00</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full lg:w-[305px] mb-8 lg:mb-0">
          <div className="h-[375px]">
            <Image
              src={Parent}
              alt="The Dandy chair"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="mt-3 text-center lg:text-left">
            <p className="text-[18px] font-normal">The Dandy chair</p>
            <p className="text-[18px] font-semibold">$99.00</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full lg:w-[305px] mb-8 lg:mb-0">
          <div className="h-[375px]">
            <Image
              src={Photo}
              alt="The Dandy chair"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="mt-3 text-center lg:text-left">
            <p className="text-[18px] font-normal">The Dandy chair</p>
            <p className="text-[18px] font-semibold">$99.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
