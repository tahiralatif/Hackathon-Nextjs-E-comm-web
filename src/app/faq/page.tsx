import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-[100px] ">
      <div className="lg:mx-20 sm:mx-10 lg:mb-20 mb-8 lg:mt-10 mx-3 mt-[150px]">
        <div className="title mx-auto ">
          <h2 className="lg:text-[36px] text-3xl text-black text-center font-semibold">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          <div className="flex md:flex-row flex-col lg:gap-5 gap-3 lg:mt-20 mt-10">
            {/* Left */}
            <div className="md:w-1/2 lg:space-y-5 space-y-3 lg:px-5">
              {/* 1 */}
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4"
                >
                  <AccordionTrigger className="lg:font-bold font-semibold lg:text-[18px] text-[#333333]">
                    What types of chairs do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
                    We offer a variety of ergonomic, office, gaming, and lounge chairs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* 2 */}
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-2"
                  className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4"
                >
                  <AccordionTrigger className="lg:font-bold font-semibold lg:text-[18px] text-[#333333]">
                    Do your chairs come with a warranty?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
                    Yes, all our chairs come with a 1-year warranty covering manufacturing defects.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* 3 */}
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-3"
                  className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4"
                >
                  <AccordionTrigger className="lg:font-bold font-semibold lg:text-[18px] text-[#333333]">
                    Can I try a chair before purchasing?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
                    Yes, you can visit our showroom to test different models before making a purchase.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right */}
            <div className="md:w-1/2 space-y-3 lg:space-y-5">
              {/* 1 */}
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-4"
                  className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4"
                >
                  <AccordionTrigger className="lg:font-bold font-semibold lg:text-[18px] text-[#333333]">
                    How can we get in touch with you?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
                    You can contact us via email at support@comfortychairs.com or call us at (123) 456-7890.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* 2 */}
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-5"
                  className="border-none bg-[#F7F7F7] lg:px-6 px-3 py-2 lg:py-4"
                >
                  <AccordionTrigger className="lg:font-bold font-semibold lg:text-[18px] text-[#333333]">
                    What will be delivered? And When?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
                    Orders are shipped within 3-5 business days. You will receive an assembled or easy-to-assemble chair with instructions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* 3 */}
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-6"
                  className="border-none bg-[#F7F7F7] px-6 py-4"
                >
                  <AccordionTrigger className="lg:font-bold font-semibold lg:text-[18px] text-[#333333]">
                    How do I clean and maintain my Comforty chair?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4F4F4F] text-xs lg:text-[16px]">
                    Use a soft, damp cloth for cleaning. Avoid harsh chemicals. For leather chairs, use leather cleaner for maintenance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
