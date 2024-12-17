import React from "react";
import Image from "next/image";
import Img from "../../../public/2nd-popular-img.png";
import { TbTruckDelivery } from "react-icons/tb";
import { LuSprout } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import Products from "./products";

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl w-full md:mt-[164px]">
  {/* Parent Flex Container */}
  <div className="w-full max-w-[1291px] mx-auto flex flex-col md:flex-row lg:flex-row gap-[10px] md:gap-[16px] px-[15px] md:px-[0]">
    
    {/* Left Div */}
    <div className="md:w-[672px] lg:w-[55%] w-full h-auto bg-[#007580] mb-[10px]">
      <div className="mt-[30px] md:mt-[60px] px-[20px] md:px-[60px] w-full">
        {/* Title */}
        <h1 className="font-bold text-[20px] sm:text-[24px] md:text-[32px] text-[#FFFFFF]">
          About Us - Comforty
        </h1>

        {/* Paragraph */}
        <p className="pr-[10px] md:pr-[30px] text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF] pt-[12px]">
          {`At Comforty, we believe that the right chair can transform 
          your space and elevate your comfort. Specializing in ergonomic design, 
          premium materials, and modern aesthetics, we craft chairs that seamlessly
          blend style with functionality.`}
        </p>

        {/* Button */}
        <button className="w-[140px] sm:w-[160px] md:w-[179px] h-[40px] sm:h-[48px] md:h-[56px] bg-[#408f96] hover:bg-[#42a9b3] text-[#FFFFFF] text-[12px] sm:text-[14px] md:text-[18px] mt-[12px] sm:mt-[24px] md:mt-[133px] mb-[24px]">
          View collection
        </button>
      </div>
    </div>

    {/* Right Div */}
    <div className="md:w-[620px] w-full h-auto max-h-[478px]">
      <Image
        className="w-full h-full object-cover overflow-hidden"
        src={Img}
        alt="Img"
      />
    </div>

  </div>


        {/* Section Title */}
        <h1 className="font-bold text-[32px] pr-[20px] md:pl-[600px] md:mt-[32px] text-center sm:text-left mt-[40px]">
          What makes our Brand Different
        </h1>

        {/* Boxes */}
        <div className="w-full max-w-[1320px] mt-[20px] md:mt-[48px] flex flex-wrap justify-between gap-4 mx-auto md:pl-[10px]">
          {/* Box 1 */}
          <div className="flex-shrink-0 flex-grow basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)] bg-backgroundcolor h-auto hover:scale-105 transition-all duration-300">
            <div className="w-full h-full p-4">
              <div className="flex flex-col m-[38px]">
                <TbTruckDelivery className="w-[24px] h-[28px] bg-backgroundcolor text-[#007580]" />
                <p className="pt-[12px] text-[18px] text-[#007580] font-semibold">
                  Next day as standard
                </p>
                <p className="pt-[12px] text-[#007580]">
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex-shrink-0 flex-grow basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)] bg-backgroundcolor h-auto hover:scale-105 transition-all duration-300">
            <div className="w-full h-full p-4">
              <div className="flex flex-col m-[38px]">
                <FaRegCircleCheck className="w-[24px] h-[28px] bg-backgroundcolor text-[#007580]" />
                <p className="pt-[12px] text-[18px] text-[#007580] font-semibold">
                  Made by true artisans
                </p>
                <p className="pt-[12px] text-[16px] text-[#007580]">
                  Handmade crafted goods made with real passion and craftsmanship
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex-shrink-0 flex-grow basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)] bg-backgroundcolor h-auto hover:scale-105 transition-all duration-300">
            <div className="w-full h-full p-4">
              <div className="flex flex-col m-[38px]">
                <CiCreditCard1 className="w-[24px] h-[28px] bg-backgroundcolor text-[#007580]" />
                <p className="pt-[12px] text-[18px] text-[#007580] font-semibold">
                  Unbeatable prices
                </p>
                <p className="pt-[12px] text-[#007580]">
                  {" For our materials and quality, you won’t find better prices anywhere"}
                </p>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="flex-shrink-0 flex-grow basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)] bg-backgroundcolor h-auto hover:scale-105 transition-all duration-300">
            <div className="w-full h-full p-4">
              <div className="flex flex-col m-[38px]">
                <LuSprout className="w-[24px] h-[24px] bg-backgroundcolor text-[#007580]" />
                <p className="pt-[12px] text-[#007580] font-semibold">
                  Recycled Packaging
                </p>
                <p className="pt-[12px] text-[#007580]">
                  We used 100% recycled materials to ensure our footprint is more manageable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Products />
    </>
  );
}
