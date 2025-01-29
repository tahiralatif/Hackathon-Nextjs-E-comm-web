import React from 'react';
import Image from 'next/image';
import Image1 from "../../../public/pages-img1.png";
import Cart from "../../../public/white-cart.png";
import Img1 from "../../../public/popular-img4.png";
import Img2 from "../../../public/productimg1.png";
import Img3 from "../../../public/categoryimg3.png";
import Img4 from "../../../public/prod-3.png";
import Img5 from "../../../public/our-prodimg-4.png";


export default function Pages() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl h-full w-full px-4 mt-[142px] mb-[143px] flex flex-col md:flex-row">
        {/* Image Div */}
        <div className="w-full md:w-[655px] h-[315px] md:h-auto mx-auto mb-8 md:mb-0">
          <Image className="object-cover" src={Image1} alt="Image1" />
        </div>

        {/* Text Div */}
        <div className="text-center md:text-left md:ml-[10px] mt-[50px]">
          <h1 className="text-[40px] md:text-[60px] pt-[20px] font-bold text-grayscalesblack">
            Library Stool <br /> Chair
          </h1>
          <button className="bg-[#029FAE] hover:bg-[#54b7c0] text-white px-[13px] pb-[9px] pt-[9px] rounded-3xl w-[118px] mb-[37px]">
            $20.00 USD
          </button>
          <hr />
          <p className="w-full md:w-[543px] mt-[37px] text-[#272343]">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit. Nullam tincidunt erat enim Lorem ipsum dolor <br /> sit amet,
            consectetur adipiscing.
          </p>
          <button className="bg-[#029FAE] hover:bg-[#54b7c0] text-white px-[13px] flex items-center justify-center gap-x-[9px] pb-[9px] pt-[9px] rounded-xl mt-[32px] w-[212px] h-[63px] mb-[37px] mx-auto md:mx-0">
            <Image
              src={Cart}
              alt="Cart"
              className="text-[20px] text-[#FFFF] font-semibold"
            />
            <p className="font-semibold text-[20px] text-[#FFFF]">Add To Cart</p>
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="w-full h-auto mt-[70px] max-w-screen-2xl mx-auto mb-[100px]">
        <div className="flex justify-between items-center mx-auto max-w-screen-2xl px-4">
          <h1 className="text-[40px] md:text-[50px] font-medium text-grayscalesblack pb-[60px]">
            Featured Products
          </h1>
          <span className="font-bold text-black text-[16px] md:text-[18px] underline">
            View All
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[16px] mx-auto px-4">
          {/* img 1 */}
          <div className="w-full h-auto">
            <div className="w-full h-[253px]">
              <Image
                src={Img1}
                alt="Img1"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mt-[12px]">
              <p className="font-semibold">Library Stool Chair</p>
              <span className="text-gray-900 font-bold">$99</span>
            </div>
          </div>

          {/* img 2 */}
          <div className="w-full h-auto">
            <div className="w-full h-[253px]">
              <Image
                src={Img2}
                alt="Img2"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mt-[12px]">
              <p className="font-semibold">Library Stool Chair</p>
              <span className="text-gray-900 font-bold">$99</span>
            </div>
          </div>

          {/* img 3 */}
          <div className="w-full h-auto">
            <div className="w-full h-[253px]">
              <Image
                src={Img3}
                alt="Img3"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mt-[12px]">
              <p className="font-semibold">Library Stool Chair</p>
              <span className="text-gray-900 font-bold">$99</span>
            </div>
          </div>

          {/* img 4 */}
          <div className="w-full h-auto">
            <div className="w-full h-[253px]">
              <Image
                src={Img4}
                alt="Img4"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mt-[12px]">
              <p className="font-semibold">Library Stool Chair</p>
              <span className="text-gray-900 font-bold">$99</span>
            </div>
          </div>

          {/* img 5 */}
          <div className="w-full h-auto">
            <div className="w-full h-[253px]">
              <Image
                src={Img5}
                alt="Img5"
                className="w-full h-[100%]  object-fill rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mt-[12px]">
              <p className="font-semibold">Library Stool Chair</p>
              <span className="text-gray-900 font-bold">$99</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

