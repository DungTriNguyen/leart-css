import React from "react";
import SectionHeader from "./SectionHeader";
import DescriptionBlock from "./DescriptionBlock";
import ImageGallery from "./ImageGallery";

const SalesChannels: React.FC = () => {
  return (
    <section className="flex flex-col items-start w-full bg-white">
      <div className="flex flex-col items-start px-24 py-16 w-full max-md:px-10 max-sm:px-5 max-sm:py-10">
        <div className="flex gap-52 justify-between items-start w-full max-md:flex-col max-md:gap-10">
          <div className="flex flex-col items-start pb-8 max-w-[630px] max-md:max-w-full">
            <SectionHeader
              label="SALES CHANNELS"
              title="Sell to every buyer, everywhere"
            />
          </div>
          <DescriptionBlock
            description="Sell online, in person, and around the world with the marketing tools, social integrations, and sales channels you need to get your products in front of customers."
            buttonText="Start selling"
          />
        </div>
      </div>
      <ImageGallery
        images={[
          {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d07006c93f2545cabd280f546d61187fc30fe6d4",
            alt: "Online store interface showing plant collections",
          },
          {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc28f6566afadb567ff9da18d694139760fb64e7",
            alt: "Mobile app interface for plant shopping",
          },
          {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cec7b3d0d91b65ba1ef7be5de42610c93a3d8e8c",
            alt: "Payment processing device and packaging",
          },
        ]}
      />
    </section>
  );
};

export default SalesChannels;
