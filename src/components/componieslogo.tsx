import React from "react";
import Image from "next/image";
import Zapier from "../../public/Zapier.svg";
import Pipedrive from "../../public/Pipedrive.svg";
import CIBbank from "../../public/cibbank.svg";
import logo from "../../public/z.logo.svg";
import BurnToast from "../../public/BurnRost.svg";
import PadaDoc from "../../public/pandadoc.svg";
import Moz from "../../public/MOZ.svg";

export default function CompaniesLogo() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mx-auto max-w-screen-2xl w-full h-auto my-[40px] px-4">
        {[Zapier, Pipedrive, CIBbank, logo, BurnToast, PadaDoc, Moz].map(
          (companyLogo, index) => (
            <div
              key={index}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] py-2 sm:py-4"
            >
              <Image
                src={companyLogo}
                alt={`Company Logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          )
        )}
      </div>
    </>
  );
}
