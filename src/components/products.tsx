import React from "react";
import Image from "next/image";
import Cart from "../../public/Buy 2.svg";
import Productimg from "../../public/productimg1.png";
import Prod1 from "../../public/prod-2.png"
import Prod2 from "../../public/prod-3.png"
import Prod3 from "../../public/prod-4.png"

export default function ProductLists() {
  return (
    <>
      <div className=" h-[461px] mx-auto max-w-screen-2xl w-[1190px]">
        <h1 className="text-[32px] font-semibold text-[#272343] w-[286px] h-[35px] ">
          Featured Products
        </h1>
        <div className="flex gap-x-[24px]">
          <div className="w-[312px] h-[312px] mt-[40px] relative ">
            <Image src={Productimg} alt="Productimg" />
            <button className=" ml-[20px] mb-[266px] mr-[243px] bg-[#01AD5A] hover:bg-[#68d19ede] absolute top-[18px] text-graywhite px-[10px] py-[4px] rounded-sm font-medium">
              New
            </button>
            <div className="flex justify-between items-center ">
              <div>
                <span className="text-[16px] hover:text-[#007580] text-grayscalesblack pt-[14px]">
                  Library Stool Chair
                </span>
                <p className="text-grayscalesblack font-bold font-[] mt-[6px]">
                  $20
                </p>
              </div>
              <Image
                className="hover:bg-buttoncolor text-grayscalesblack hover:text-[#FAFAFA] h-[44px] w-[44px] px-[12px]  rounded-sm bg-backgroundcolor"
                src={Cart}
                alt="Cart"
              />
            </div>
          </div>

{/* Image-2............ */}
          <div className="w-[312px] h-[312px] mt-[40px] relative ">
            <Image src={Prod1} alt="Productimg" />
            <button className=" ml-[20px] mb-[266px] mr-[243px] bg-[#F5813F] hover:bg-[#cf7643] absolute top-[18px] text-graywhite px-[10px] py-[4px] rounded-sm font-medium">
              Sales
            </button>
            <div className="flex justify-between items-center ">
              <div>
                <span className="text-[16px] hover:text-[#007580] text-grayscalesblack pt-[14px]">
                  Library Stool Chair
                </span>
                <p className="text-grayscalesblack font-bold font-[] mt-[6px]">
                  $20
                </p>
              </div>
              <Image
                className="hover:bg-buttoncolor text-grayscalesblack hover:text-[#FAFAFA] h-[44px] w-[44px] px-[12px]  rounded-sm bg-backgroundcolor"
                src={Cart}
                alt="Cart"
              />
            </div>
          </div>

{/* image-3.................... */}
          <div className="w-[312px] h-[312px] mt-[40px] relative ">
            <Image src={Prod2} alt="Productimg" />
            {/* <button className=" ml-[20px] mb-[266px] mr-[243px] bg-[#01AD5A] hover:bg-[#68d19ede] absolute top-[18px] text-graywhite px-[10px] py-[4px] rounded-sm font-medium">
              New
            </button> */}
            <div className="flex justify-between items-center ">
              <div>
                <span className="text-[16px] hover:text-[#007580] text-grayscalesblack pt-[14px]">
                  Library Stool Chair
                </span>
                <p className="text-grayscalesblack font-bold font-[] mt-[6px]">
                  $20
                </p>
              </div>
              <Image
                className="hover:bg-buttoncolor text-grayscalesblack hover:text-[#FAFAFA] h-[44px] w-[44px] px-[12px]  rounded-sm bg-backgroundcolor"
                src={Cart}
                alt="Cart"
              />
            </div>
          </div>

{/* image-4 */}
          <div className="w-[312px] h-[312px] mt-[40px] relative ">
            <Image src={Prod3} alt="Productimg" />
            {/* <button className=" ml-[20px] mb-[266px] mr-[243px] bg-[#01AD5A] hover:bg-[#68d19ede] absolute top-[18px] text-graywhite px-[10px] py-[4px] rounded-sm font-medium">
              New
            </button> */}
            <div className="flex justify-between items-center ">
              <div>
                <span className="text-[16px] hover:text-[#007580] text-grayscalesblack pt-[14px]">
                  Library Stool Chair
                </span>
                <p className="text-grayscalesblack font-bold font-[] mt-[6px]">
                  $20
                </p>
              </div>
              <Image
                className="hover:bg-buttoncolor text-grayscalesblack hover:text-[#FAFAFA] h-[44px] w-[44px] px-[12px]  rounded-sm bg-backgroundcolor"
                src={Cart}
                alt="Cart"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
