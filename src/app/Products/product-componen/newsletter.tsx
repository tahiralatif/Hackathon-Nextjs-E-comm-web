import React from "react";
import Image from "next/image";
import Img1 from "../../../../public/categaory-img1.png";
import Img2 from "../../../../public/categoryimg-2.png";
import Img3 from "../../../../public/prod-2.png";
import Img4 from "../../../../public/productimg1.png";
import Img5 from "../../../../public/prod-3.png";
import Img6 from "../../../../public/categoryimg3.png";

export default function Newsletter() {
  return (
    <>
      <div className="mt-[173px] w-full py-[100px] h-auto mx-auto max-w-screen-2xl bg-backgroundcolor">
        {/* Newsletter Section */}
        <div className="w-full max-w-[760px] h-auto mx-auto px-4 sm:px-0">
          <h1 className="font-medium text-[32px] text-center sm:text-[50px] text-grayscalesblack pl-[29px] pb-[40px]">
            Or Subscribe to the Newsletter
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              placeholder="Email Address"
              type="text"
              className="h-[32px] w-full sm:w-[643px] border-b-4 border-[#000000] bg-backgroundcolor outline-none placeholder:text-[16px] placeholder:font-semibold"
            />
            <button className="border-b-4 border-[#000000] outline-none mt-4 sm:mt-0 ml-0 sm:ml-[26px] uppercase text-[16px] font-sans text-[#1E2832] ">
              Submit
            </button>
          </div>
        </div>

        {/* Images Section */}
        <div className="w-full max-w-[1324px] h-auto mt-[70px] mx-auto mb-[100px]">
          <h1 className="text-[32px] sm:text-[50px] font-medium text-grayscalesblack pb-[40px] text-center">
            Follow products and discounts on Instagram
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mx-auto px-4">
            {/* Image Components */}
            <div className="w-full h-[186px]">
              <Image
                src={Img1}
                alt="Img1"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-full h-[186px]">
              <Image
                src={Img2}
                alt="Img2"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-full h-[186px]">
              <Image
                src={Img3}
                alt="Img3"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-full h-[186px]">
              <Image
                src={Img4}
                alt="Img4"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-full h-[186px]">
              <Image
                src={Img5}
                alt="Img5"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-full h-[186px]">
              <Image
                src={Img6}
                alt="Img6"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
