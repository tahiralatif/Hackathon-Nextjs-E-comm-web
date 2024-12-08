import React from "react";
import Image from "next/image";
import Zapier from "../../public/Zapier.svg";
import Pipedrive from "../../public/Pipedrive.svg";
import CIBbank from "../../public/cibbank.svg";
import logo from "../../public/z.logo.svg";
import BurnToast from "../../public/BurnRost.svg";
import PadaDoc from "../../public/pandadoc.svg";
import Moz from "../../public/MOZ.svg"
export default function ComponiesLogo() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-screen-2xl w-full h-auto my-[40px]">
        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] py-4 text-[150px]">
          <Image src={Zapier} alt="Zapier" className="w-full h-full object-contain" />
        </div>

        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] py-4 text-[150px]">
          <Image src={Pipedrive} alt="Pipedrive" className="w-full h-full object-contain" />
        </div>

        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] py-4 text-[150px]">
          <Image src={CIBbank} alt="CIBbank" className="w-full h-full object-contain" />
        </div>

        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] py-4 text-[150px]">
          <Image src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>

        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] py-4 text-[150px]">
          <Image src={BurnToast} alt="BurnToast" className="w-full h-full object-contain" />
        </div>

        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] py-4 text-[150px]">
          <Image src={PadaDoc} alt="PadaDoc" className="w-full h-full object-contain" />
        </div>

        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] py-4 text-[150px]">
          <Image src={Moz} alt="Moz" className="w-full h-full object-contain" />
        </div>
      </div>
    </>
  );
}
