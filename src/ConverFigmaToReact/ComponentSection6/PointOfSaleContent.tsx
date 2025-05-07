import React from "react";
import ArrowIcon from "./ArrowIcon";

/**
 * PointOfSaleContent component displays the textual content and CTA link
 * for the Point of Sale section.
 */
const PointOfSaleContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 px-0 py-32 max-w-[420px] max-md:px-0 max-md:py-16 max-md:max-w-full max-sm:px-0 max-sm:py-10">
      <header className="flex flex-col gap-4">
        <h2 className="mb-2 text-base tracking-tight leading-4 text-black uppercase">
          POINT OF SALE
        </h2>
        <h3 className="mb-4 text-4xl tracking-tighter leading-10 text-black max-sm:text-3xl max-sm:leading-10">
          Flexible point of sale to power your retail store
        </h3>
        <p className="text-lg leading-7 text-black max-sm:text-base max-sm:leading-6">
          A POS system that allows customers to shop their way, from online to
          checkout line.
        </p>
      </header>

      <a
        href="#"
        className="flex gap-5 items-center pt-0 pr-0 pb-4 pl-1 border-b border-solid cursor-pointer border-b-black"
        aria-label="Learn more about Shopify POS"
      >
        <span className="text-lg font-medium leading-7 text-black">
          Meet Shopify POS
        </span>
        <ArrowIcon />
      </a>
    </div>
  );
};

export default PointOfSaleContent;
