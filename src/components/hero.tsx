"use client";

import React from "react";
import Image from "next/image";
import RightArrow from "../../public/Line.svg";
import CustomButton from "../components/buttonprop";
import HeroImage from "../../public/hero-img.png";

export default function HeroSec() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="mx-auto max-w-screen-2xl w-[1321px] h-[850px] ">
      <div className="w-[90%] h-full  bg-backgroundcolor py-[100px] mx-auto rounded-l-3xl">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl px-4">
          {/* Text Content */}
          <div className="flex flex-col max-w-[60%] px-[70px]">
            <p className="text-[14px] font-normal pb-[24px] text-grayscalesblack">
              WELCOME TO CHAIRY
            </p>
            <h1 className="font-bold text-[60px] leading-tight text-grayscalesblack pb-[49px]">
              Best Furniture <br />
              Collection for your <br />
              interior.
            </h1>
            <CustomButton 
              text="Shop Now" 
              icon={RightArrow} 
              onClick={handleClick} 
            />
          </div>

          {/* Hero Image */}
          <div className="max-w-[50%]">
            <Image 
              src={HeroImage} 
              alt="Hero Image" 
              className="w-full h-[700px] pt-[50px] pb-[115px] pr-[77px]"
              priority={true}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
