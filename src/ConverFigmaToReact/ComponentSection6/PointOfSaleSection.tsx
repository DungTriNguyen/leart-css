"use client";

import React from "react";
import PointOfSaleContent from "./PointOfSaleContent";

/**
 * PointOfSaleSection component displays a marketing section for Shopify's POS system
 * with descriptive content and an image of the POS interface.
 */
const PointOfSaleSection: React.FC = () => {
  return (
    <section className="flex gap-10 justify-between items-start px-5 py-0 mx-auto my-0 max-w-[1260px] max-md:flex-col max-md:items-center max-md:px-5 max-md:py-10 max-sm:p-5">
      <PointOfSaleContent />

      <figure className="flex justify-center items-center flex-[0_0_618px] max-md:flex-none max-md:w-full max-md:max-w-[618px] max-sm:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d75f4c112c4b5a63b25f12a5fd56e288ea4ceb66"
          alt="POS system interface showing payment approval and menu options"
          className="object-cover w-full h-[553px] max-sm:h-auto"
        />
      </figure>
    </section>
  );
};

export default PointOfSaleSection;
