import React from "react";
import CTAButton from "./CTAButton";
import PlayIcon from "./PlayIcon";

const HeroSection: React.FC = () => {
  return (
    <section className="overflow-hidden relative w-full bg-black min-h-[729px]">
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfb84d63663e9f632406ead66f6cd2b68ea4540b"
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="flex relative z-20 flex-col justify-between px-24 pt-64 pb-14 h-full max-md:px-10 max-md:pt-36 max-sm:px-5 max-sm:pt-24">
        <div className="flex flex-col gap-10 max-w-[600px]">
          <h1 className="text-6xl tracking-tighter text-white leading-[64px] max-md:text-5xl max-md:leading-[52px] max-sm:text-4xl max-sm:leading-10">
            Making Commerce Better for Everyone
          </h1>
          <p className="text-2xl tracking-tight leading-8 text-white max-md:text-xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
            Shopify is supporting the next generation of entrepreneurs, the
            world's biggest brands, and everyone in between
          </p>
        </div>
        <div className="flex gap-6 items-center mt-40 max-md:mt-24 max-sm:flex-col max-sm:gap-4">
          <div className="flex gap-4 items-center max-sm:flex-col">
            <CTAButton primary>Start free trial</CTAButton>
            <p className="text-sm tracking-wide leading-5 text-white">
              Start for free, then get your first 3 months for $1/mo.
            </p>
          </div>
          <button className="flex gap-4 justify-center items-center px-6 py-3.5 rounded-full border border-solid cursor-pointer bg-white bg-opacity-10 border-white border-opacity-40">
            <PlayIcon />
            <span className="text-lg leading-7 text-white">
              Watch the Shopify story
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
