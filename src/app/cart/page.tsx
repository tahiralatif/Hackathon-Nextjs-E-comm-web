import React from "react";
import Image from "next/image";
import img1 from "../../../public/prod-3.png";
import Heart from "../../../public/heart.svg";
import Delete from "../../../public/delete.svg";
import Img2 from "../../../public/our-prodimg-4.png";

export default function Cart() {
  return (
    <>
      <div className="w-full h-full max-w-screen-xl mx-auto  mt-[76px] mb-[300px] ">
        <div className="w-[1609px] h-[632.89px] mt-[151px] mx-[30px] md:mx-[80px]">
          <div className="my-[20px] w-[1100px] h-[547px] lg:flex md:flex">
            <div className="w-[733.33px] h-[547.89px] mb-[22px] mt-[22px] ">
              <h2 className="text-[#111111] font-medium text-[20px] md:pl-[6px]">
                Bag
              </h2>

              <div className="flex items-center mt-[24px] pb-[16px]">
                <Image
                  src={img1}
                  alt="Library Stool Chair"
                  className="w-[150px] h-[150px] mr-[30px] mt-[24px]"
                />
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="font-normal text-[16px] text-grayscalesblack pb-4">
                      Library Stool Chair
                    </p>
                    <p className="font-normal text-[16px] text-grayscalesblack pb-4">
                      MRP: $99
                    </p>
                  </div>
                  <p className="text-[15px] text-[#757575] font-normal pb-4">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <div className="flex gap-x-[50px] mb-[20px]">
                    <p className="text-[#757575] text-[15px] font-normal">
                      Size L
                    </p>
                    <p className="text-[#757575] text-[15px] font-normal">
                      Quantity 1
                    </p>
                  </div>
                  <div className="flex">
                    <Image
                      src={Heart}
                      alt="Heart"
                      className="h-[24px] w-[24px] mr-[16px]"
                    />
                    <Image
                      src={Delete}
                      alt="Delete"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-[24px] border-t-2 pt-[16px]">
                <Image
                  src={Img2}
                  alt="Library Stool Chair"
                  className="w-[150px] h-[150px] mr-[30px] mt-[24px]"
                />
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="font-normal text-[16px] text-grayscalesblack pb-4">
                      Library Stool Chair
                    </p>
                    <p className="font-normal text-[16px] text-grayscalesblack pb-4">
                      MRP: $99
                    </p>
                  </div>
                  <p className="text-[15px] text-[#757575] font-normal pb-4">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <div className="flex gap-x-[50px] mb-[20px]">
                    <p className="text-[#757575] text-[15px] font-normal">
                      Size L
                    </p>
                    <p className="text-[#757575] text-[15px] font-normal">
                      Quantity 1
                    </p>
                  </div>
                  <div className="flex">
                    <Image
                      src={Heart}
                      alt="Heart"
                      className="h-[24px] w-[24px] mr-[16px]"
                    />
                    <Image
                      src={Delete}
                      alt="Delete"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[390px] h-[295px] mt-[28px]  md:mr-[158px] md:pl-[75px] ">
              <h2 className="font-medium text-[21px] px-[8px] py-[-1px]">
                Summary
              </h2>

              <div className="flex justify-between items-center px-[4px] pt-[37px]">
                <p className="text-[15px] font-normal  ">Subtotal</p>
                <p className="text-[14px] font-medium text-grayscalesblack">
                  $198.00
                </p>
              </div>

              <div className="flex justify-between items-center px-[4px] pt-[37px]">
                <p className="text-[15px] font-normal  ">
                  {"Estimated Delivery & Handling"}
                </p>
                <p className="text-[14px] font-medium text-grayscalesblack">
                  Free
                </p>
              </div>

              <div className="w-[340.38px] pb-[19px] pt-[19px] flex justify-between border-t-2 border-b-2 mt-[20px]">
                <p>Total</p>
                <p>$198.00</p>
              </div> 
              <button className="w-[334.67px] h-[60px] bg-[#029FAE] hover:bg-[#57bbc4] mt-[32px] px-[101px] mb-[400px] py-[18px] text-[#FAFAFA] rounded-full ">
                Member Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
