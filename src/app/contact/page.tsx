import React from "react";
import Image from "next/image";
import Adress from "../../../public/address.svg";
import Phone from "../../../public/phone.svg";
import Time from "../../../public/time.svg";
import Trophy from "../../../public/trophy 1.svg";
import Support from "../../../public/customer-support.svg";
import Guarantee from "../../../public/guarantee.svg";

export default function CotactPage() {
  return (
    <>
      <div className="w-full max-w-screen-xl h-auto mt-[148px] mb-[203px] mx-auto px-4 ">
        <div className="md:ml-[240px] mx-auto max-w-screen-xl md:mr-[140px] sm:mr-[40px] sm:ml-[40px]">
          <h1 className="font-bold text-[36px] sm:text-[25px] text-center">
            Get In Touch With Us
          </h1>
          <p className="text-center text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel
            Free To Drop Us <br /> An Email. Our Staff Always Be There To Help
            You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row mx-auto max-w-screen-xl items-center md:px-0">
          <div className="w-full md:w-[393px] h-auto bg-white mb-[57px] md:mb-0  ml-[100px]">
            <div className="flex gap-x-[20px] mt-[40px]">
              <Image src={Adress} alt="Adress" />
              <h2 className="font-semibold text-[24px] ">Address</h2>
            </div>
            <p className="pl-[44px] text-[16px] font-medium">
              236 5th SE Avenue, New <br />York NY10000, United <br />States
            </p>

            <div className="flex gap-x-[20px] mt-[57px]">
              <Image src={Phone} alt="Phone" />
              <h2 className="font-semibold text-[24px] ">Phone</h2>
            </div>
            <p className="pl-[44px] text-[16px] font-medium">
              {"Mobile: +(84) 546-6789"}
              <br />{"Hotline: +(84) 456-6789"}
            </p>

            <div className="flex gap-x-[20px] mt-[57px]">
              <Image src={Time} alt="Working Time" />
              <h2 className="font-semibold text-[24px] ">Working Time</h2>
            </div>
            <p className="pl-[44px] text-[16px] font-medium">
              {`Monday-Friday: 9:00 - `}
              <br />{`22:00`}
              <br />{`Saturday-Sunday: 9:00 - `}
              <br />{`21:00`}
            </p>
          </div>

          <div className="w-full md:w-[635px] h-auto">
            <div className="w-full md:w-[531px] lg:mt-[119px] mx-auto">
              <form>
                <div>
                  <label className="text-[16px] font-semibold ">Your name</label>{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="Tahira"
                    className="w-full md:w-[528.75px] h-[75px] mt-[10px] mb-[22px] rounded-md border-2 placeholder:pl-[29px]"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-semibold ">Your Email</label>{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    className="w-full md:w-[528.75px] h-[75px] mt-[10px] mb-[22px] border-2 placeholder:pl-[29px] rounded-md"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-semibold ">Subject</label>
                  <br />
                  <input
                    type="text"
                    placeholder="This is an Optional"
                    className="w-full md:w-[528.75px] h-[75px] mt-[10px] mb-[22px] border-2 placeholder:pl-[29px] rounded-md"
                  />
                </div>

                <div>
                  <label className="text-[16px] font-semibold ">Message</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Hi! i’d like to ask about"
                    className="w-full md:w-[528.75px] h-[120px] mt-[10px] mb-[22px] border-2 placeholder:pl-[29px] rounded-md"
                  />
                </div>
              </form>
              <button className="w-[237px] h-[55px] ml-[7px] mt-[49px] bg-[#029FAE] text-[#FAFAFA] text-[16px] font-medium hover:bg-[#02a0aede] rounded-lg ">
                Submit
              </button>
            </div>
          </div>
        </div>
{/* Guarantee Section */}
<div className="w-full bg-backgroundcolor mt-[63px] flex flex-col md:flex-row justify-between items-center p-[40px] lg:h-[270px]">
  <div className="flex flex-col md:flex-row gap-[20px] w-full">
    <div className="flex flex-col items-center md:flex-row gap-x-[10px] pl-2 w-full md:w-auto lg:mr-[112px]" >
      <Image src={Trophy} alt="Trophy" />
      <div className="text-center md:text-left ">
        <h2 className="font-semibold text-[20px] sm:text-[25px] text-grayscalesblack">
          High Quality
        </h2>
        <p className="font-medium text-[16px] sm:text-[20px] text-[#898989]">
          Crafted from top materials
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center md:flex-row gap-x-[10px] w-full md:w-auto lg:mr-[112px]">
      <Image src={Guarantee} alt="Guarantee" />
      <div className="text-center md:text-left">
        <h2 className="font-semibold text-[20px] sm:text-[25px] text-grayscalesblack">
          Warranty Protection
        </h2>
        <p className="font-medium text-[16px] sm:text-[20px] text-[#898989]">
          Over 2 Years
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center md:flex-row gap-x-[10px] pr-2 w-full md:w-auto">
      <Image src={Support} alt="Support" />
      <div className="text-center md:text-left">
        <h2 className="font-semibold text-[20px] sm:text-[25px] text-grayscalesblack">
          24 / 7 Support
        </h2>
        <p className="font-medium text-[16px] sm:text-[20px] text-[#898989]">
          Dedicated support
        </p>
      </div>
    </div>
  </div>
</div>




      </div>
    </>
  );
}
