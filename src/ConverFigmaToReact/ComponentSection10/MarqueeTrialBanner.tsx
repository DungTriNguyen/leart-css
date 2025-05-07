"use client";
import * as React from "react";

/**
 * Arrow icon component for the marquee banner
 */
const ArrowIcon: React.FC = () => (
  <svg
    width="33"
    height="34"
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-icon"
    aria-hidden="true"
  >
    <path
      d="M4.94995 17.27H28.0499"
      stroke="black"
      strokeWidth="4.125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8 9.02002L28.0501 17.27L19.8 25.52"
      stroke="black"
      strokeWidth="4.125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Single item in the marquee banner
 */
const MarqueeItem: React.FC = () => (
  <div className="flex gap-10 items-start pr-10 max-sm:gap-5 max-sm:pr-5">
    <h2 className="text-3xl font-bold leading-9 text-black max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7">
      START YOUR FREE TRIAL
    </h2>
    <div className="flex items-end pt-1.5">
      <ArrowIcon />
    </div>
  </div>
);

/**
 * MarqueeTrialBanner component that displays a horizontally scrolling banner
 * with "START YOUR FREE TRIAL" text and arrow icons
 */
const MarqueeTrialBanner: React.FC = () => {
  return (
    <section
      className="overflow-hidden relative w-full h-20 bg-white"
      aria-label="Free trial promotion"
    >
      <div className="flex absolute whitespace-nowrap animate-[marquee_20s_linear_infinite]">
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
      </div>
    </section>
  );
};

export default MarqueeTrialBanner;
