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
        <div className="w-full max-w-[1291px] mx-auto md:flex md:flex-row sm:flex-col lg:flex-row md:ml-[190px] ml-[30px] md:mr-auto">
          {/* Left Div */}
          <div className="md:w-[672px] lg:w-[50%] w-full h-[50vw] max-h-[478px] bg-[#007580] mb-[10px] md:mr-[2%]">
  <div className="mt-[60px] md:ml-[60px] ml-[30px] mr-[40px] md:mr-[113px] w-full max-w-[495px] h-[161px]">
    <h1 className="font-bold text-[22px] md:text-[32px] text-[#FFFFFF]">
      About Us - Comforty
    </h1>

    <p className="pr-[30px] md:text-[18px] text-[#FFFFFF] pt-[12px]">
      {`At Comforty, we believe that the right chair can transform 
          your space and elevate your comfort. Specializing in ergonomic design, 
          premium materials, and modern aesthetics, we craft chairs that seamlessly
          blend style with functionality.`}
    </p>

    <button className="md:w-[179px] text-[12px]  md:h-[56px] bg-[#408f96] hover:bg-[#42a9b3] text-[#FFFFFF] p-[4px] md:text-[18px] mt-[2px] md:mt-[133px] mb-[54px]">
      View collection
    </button>
  </div>
</div>

{/* Right Div */}
<div className="md:w-[620px] w-full h-[60vw] max-h-[478px] mx-auto">
  <Image
    className="w-full h-full object-cover md:object-cover overflow-hidden"
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
<div className="w-full max-w-[1320px] mt-[20px] md:mt-[48px] flex flex-wrap justify-between gap-4 mx-auto md:ml-[170px]">
  {/* Box 1 */}
  <div className="flex-shrink-0 flex-grow basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)] bg-backgroundcolor h-full hover:scale-105 transition-all duration-300">
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
  <div className="flex-shrink-0 flex-grow basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)] bg-backgroundcolor h-full hover:scale-105 transition-all duration-300">
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
  <div className="flex-shrink-0 flex-grow basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)] bg-backgroundcolor h-full hover:scale-105 transition-all duration-300">
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
  <div className="flex-shrink-0 flex-grow basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)] bg-backgroundcolor h-full hover:scale-105 transition-all duration-300">
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
