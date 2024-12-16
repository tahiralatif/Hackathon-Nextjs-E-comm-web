import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Plus from "../../../public/Plus.svg";
import Image from "next/image";

export default function FaqSec() {
  const faqs = [
    {
      question: "What types of chairs do you offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Do your chairs come with a warranty?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Can I try a chair before purchasing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And When?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];

  return (
    <div className="px-4 lg:px-0 mt-12 mx-auto max-w-screen-xl lg:mt-[120px]">
      {/* Heading Section */}
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-grayscalesblack  mx-auto">
          Question Looks Here
        </h1>
        <p className="text-gray-500 mt-4 max-w-[700px] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-6">
        {/* Left Side Accordion */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-6">
          {faqs.slice(0, 3).map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={`item-${index}`}
                className="bg-[#f8f8f8]  items-center  rounded-lg p-4 shadow-md"
              >
                <AccordionTrigger className="text-left  text-lg font-bold text-grayscalesblack flex-1">
                  <div className=" w-full flex justify-between">
                  {faq.question}
                  <Image src={Plus} alt="Plus Icon" width={20} height={20} className="ml-[40px]"/>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Right Side Accordion */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-6">
          {faqs.slice(3, 6).map((faq, index) => (
            <Accordion key={index + 3} type="single" collapsible>
              <AccordionItem
                value={`item-${index + 3}`}
                className="bg-[#f8f8f8] items-center  rounded-lg p-4 shadow-md"
              >
                <AccordionTrigger className="text-left  text-lg font-bold text-grayscalesblack flex-1">
               
                <div className=" w-full flex justify-between">
                  {faq.question}
                  <Image src={Plus} alt="Plus Icon" width={20} height={20} className="ml-[40px]"/>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
