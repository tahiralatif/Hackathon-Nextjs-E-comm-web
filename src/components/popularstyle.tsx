import React from 'react';
import Image from 'next/image';
import PopularImage1 from "../../public/popularImg1.png";
import PopularImage2 from "../../public/popularimg-2.png";
import Img3 from "../../public/2nd-popular-img.png";
import Img4 from "../../public/popular-img-3.png";
import Img5 from "../../public/popular-img4.png";

export default function Popularstyle() {
  return (
    <div className="w-[80%] max-w-screen-2xl mx-auto h-auto mt-[50px] lg:mt-[120px] flex flex-col lg:flex-row justify-center relative gap-y-4 lg:gap-x-4">
      {/* Rotated Text */}
      <div className="absolute left-[-270px] top-[50%] transform -translate-y-1/2 rotate-[-90deg] hidden lg:block">
        <p className=" hidden lg:block text-[24px] lg:text-[34px] font-medium text-grayscalesblack">
          EXPLORE NEW AND POPULAR STYLES
        </p>
      </div>

      {/* Large Image */}
      <div className="w-full lg:w-[645px] h-auto lg:ml-[50px]">
        <p className='md:hidden text-center text-[24px] font-bold pb-[16px]'> EXPLORE NEW AND POPULAR STYLES</p>
        <Image
          src={PopularImage1}
          alt="PopularImage1"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Smaller Images */}
      <div className="w-full lg:w-[642px] h-auto grid grid-cols-2 gap-4">
        <div className="w-full h-auto">
          <Image
            src={PopularImage2}
            alt="PopularImage2"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-auto">
          <Image
            src={Img3}
            alt="Img3"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-auto">
          <Image
            src={Img4}
            alt="Img4"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-auto">
          <Image
            src={Img5}
            alt="Img5"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
