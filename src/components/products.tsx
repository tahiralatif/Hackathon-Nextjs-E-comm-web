import React from "react";
import Image from "next/image";
import Cart from "../../public/Buy 2.svg";
import Productimg from "../../public/productimg1.png";
import Prod1 from "../../public/prod-2.png";
import Prod2 from "../../public/prod-3.png";
import Prod3 from "../../public/prod-4.png";

export default function ProductLists() {
  return (
    <>
      <div className="mx-auto px-4 max-w-screen-xl">
        {/* Heading */}
        <h1 className="text-[28px] sm:text-[32px] font-semibold text-[#272343] lmb-6 md:pl-[110px]">
          Featured Products
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:mx-[80px]">
          {/* Product 1 */}
          <div className="relative">
            <Image
              src={Productimg}
              alt="Productimg"
              className="w-full h-auto object-cover"
            />
            <button className="absolute top-4 left-4 bg-[#01AD5A] hover:bg-[#68d19e] text-white px-3 py-1 rounded-sm font-medium">
              New
            </button>
            <div className="flex justify-between items-center mt-3">
              <div>
                <span className="block text-[16px] font-medium hover:text-[#007580]">
                  Library Stool Chair
                </span>
                <p className="text-[#272343] font-bold mt-1">$20</p>
              </div>
              <Image
                src={Cart}
                alt="Cart"
                className="h-[44px] w-[44px] bg-gray-100 hover:bg-[#01AD5A] p-2 rounded-sm"
              />
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative">
            <Image
              src={Prod1}
              alt="Prod1"
              className="w-full h-auto object-cover"
            />
            <button className="absolute top-4 left-4 bg-[#F5813F] hover:bg-[#cf7643] text-white px-3 py-1 rounded-sm font-medium">
              Sales
            </button>
            <div className="flex justify-between items-center mt-3">
              <div>
                <span className="block text-[16px] font-medium hover:text-[#007580]">
                  Library Stool Chair
                </span>
                <p className="text-[#272343] font-bold mt-1">$20</p>
              </div>
              <Image
                src={Cart}
                alt="Cart"
                className="h-[44px] w-[44px] bg-gray-100 hover:bg-[#F5813F] p-2 rounded-sm"
              />
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative">
            <Image
              src={Prod2}
              alt="Prod2"
              className="w-full h-auto object-cover"
            />
            <div className="flex justify-between items-center mt-3">
              <div>
                <span className="block text-[16px] font-medium hover:text-[#007580]">
                  Library Stool Chair
                </span>
                <p className="text-[#272343] font-bold mt-1">$20</p>
              </div>
              <Image
                src={Cart}
                alt="Cart"
                className="h-[44px] w-[44px] bg-gray-100 hover:bg-[#007580] p-2 rounded-sm"
              />
            </div>
          </div>

          {/* Product 4 */}
          <div className="relative">
            <Image
              src={Prod3}
              alt="Prod3"
              className="w-full h-auto object-cover"
            />
            <div className="flex justify-between items-center mt-3">
              <div>
                <span className="block text-[16px] font-medium hover:text-[#007580]">
                  Library Stool Chair
                </span>
                <p className="text-[#272343] font-bold mt-1">$20</p>
              </div>
              <Image
                src={Cart}
                alt="Cart"
                className="h-[44px] w-[44px] bg-gray-100 hover:bg-[#007580] p-2 rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
