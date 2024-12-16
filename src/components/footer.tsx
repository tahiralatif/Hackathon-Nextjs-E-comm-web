import React from "react";
import Logo from "../../public/Logo Icon.png";
import Image from "next/image";
import Fb from "../../public/fb.png";
import Twitter from "../../public/twitter.png";
import Instagram from "../../public/Instagram 1.svg";
import Printrest from "../../public/Pinterest---Negative 1.svg";
import Youtube from "../../public/YouTube---Negative 1.svg";
import Paypal from "../../public/Group 13.svg";

export default function Footer() {
  return (
    <>
      <div className="pt-8 w-full mx-auto max-w-screen-2xl px-4 md:px-8 mt-36 mb-16 border-t-4 flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0 lg:px-24">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start lg:pr-24">
          <div className="flex items-center mb-6">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <p className="text-2xl font-medium ml-2">Comforty</p>
          </div>
          <p className="text-center lg:text-left text-sm sm:text-base md:text-lg text-grayscalesblack w-full md:w-[300px] mb-6">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 mt-6">
            <Image src={Fb} alt="Facebook" width={30} height={30} />
            <Image src={Twitter} alt="Twitter" width={30} height={30} />
            <Image src={Instagram} alt="Instagram" width={20} height={20} />
            <Image src={Printrest} alt="Pinterest" width={20} height={20} />
            <Image src={Youtube} alt="YouTube" width={22} height={22} />
          </div>
        </div>

        {/* Categories */}
        <div className="text-center lg:text-left">
          <h1 className="uppercase text-xs sm:text-sm font-medium text-[#9A9CAA] mb-2">Category</h1>
          <ul className="space-y-2 text-sm sm:text-base text-grayscalesblack">
            {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="text-center lg:text-left">
          <h1 className="uppercase text-xs sm:text-sm font-medium text-[#9A9CAA] mb-2">Support</h1>
          <ul className="space-y-2 text-sm sm:text-base text-grayscalesblack">
            {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full lg:w-[424px]">
          <h1 className="uppercase text-xs sm:text-sm font-medium text-[#9A9CAA] pb-4 text-center lg:text-left">
            News Letter
          </h1>
          <div className="flex flex-col sm:flex-row items-center lg:justify-start mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              placeholder="Your Email"
              className="h-10 w-full sm:w-[250px] lg:w-[300px] border border-gray-300 outline-none placeholder:text-sm placeholder:text-gray-500 pl-2"
            />
            <button className="bg-buttoncolor hover:bg-[#65c6cff3] py-2 px-4 rounded-lg font-semibold text-sm text-white w-full sm:w-auto">
              Subscribe
            </button>
          </div>
          <p className="text-sm sm:text-base text-grayscalesblack text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full mx-auto max-w-screen-2xl border-t-4 px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="py-2 flex gap-x-2 text-center md:text-left">
          <p className="text-xs sm:text-sm text-[#9A9CAA]">@ 2021 - Comforty - Designed & Developed by </p>
          <p className="text-xs sm:text-sm text-grayscalesblack font-medium">Zakirsoft</p>
        </div>
        <div className="h-[40px] w-full md:w-[227px] flex items-center justify-center mt-4 md:mt-0">
          <Image src={Paypal} alt="Paypal" width={227} height={40} className="h-auto w-auto" />
        </div>
      </div>
    </>
  );
}
