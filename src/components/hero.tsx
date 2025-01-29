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
      <div className="mx-auto max-w-screen-2xl w-full md:w-[1200px] lg:w-[1321px] h-auto lg:h-[850px]">
        <div className="lg:w-[90%] w-full h-full bg-backgroundcolor py-[50px] lg:py-[80px] mx-auto rounded-l-b-3xl md:pb-[50px]">
          <div className="lg:flex lg:items-center lg:justify-between mx-auto max-w-screen-xl lg:px-4 px-[30px]">
            {/* Text Content */}
            <div className="flex flex-col lg:max-w-[60%] max-w-full pl-[40px] ">
              <p className="text-[14px] font-semibold  pb-[16px] text-grayscalesblack">
                WELCOME TO CHAIRY
              </p>
              <h1 className="font-bold text-[32px] sm:text-[40px] md:text-[45px] lg:text-[60px] text-grayscalesblack md:leading-tight pb-[24px]">
                Best <span className="text-buttoncolor">
                Furniture</span> <br />
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
            <div className="w-full lg:max-w-[45%] flex justify-center">
              <Image 
                src={HeroImage} 
                alt="Hero Image" 
                className="w-full h-auto  md:mt-[80px] mt-[40px]  pb-[40px] lg:pb-[0px] md:ml-[90px] ml-[45px] pr-[77px]"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
