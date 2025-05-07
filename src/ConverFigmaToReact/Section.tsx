import React from "react";

export const Section = () => {
  return <div>"use client";
  import * as React from "react";
  import StatCard from "./StatCard";
  import FeatureCard from "./FeatureCard";
  
  const ShopifyStats: React.FC = () => {
    return (
      <section className="px-24 py-0 mx-auto my-0 max-w-[1440px] max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
        <div className="flex relative gap-16 items-start mb-20 max-md:flex-col">
          <div className="relative flex-[0_0_735px] max-md:flex-none max-md:w-full max-md:text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc584b497716fa489ec0e43e2c143dff54538fda"
              className="relative -top-20 h-[809px] left-[-275px] w-[809px] max-md:static max-md:w-full max-md:h-auto max-md:max-w-[600px]"
              alt="Globe illustration"
            />
          </div>
          <div className="flex-1 pt-8">
            <header className="mb-12">
              <h1 className="mb-2 text-5xl text-black leading-[52px] max-w-[735px] max-sm:text-3xl max-sm:leading-10">
                Discover why millions of entrepreneurs chose Shopify to build
                their business —
              </h1>
              <div className="flex items-center">
                <div className="absolute h-[52px] w-[519px] z-[-1]" />
                <p className="relative text-5xl text-black leading-[52px] max-sm:text-3xl max-sm:leading-10">
                  from hello world to IPO.
                </p>
              </div>
            </header>
            <div className="grid gap-20 grid-cols-[repeat(2,356px)] max-md:gap-10 max-md:grid-cols-[1fr] max-sm:gap-8">
              <StatCard
                value="Millions"
                description="of merchants worldwide"
              />
              <StatCard
                value="170+"
                description="countries represented"
              />
              <StatCard
                value="10%"
                description="of total US ecommerce"
              />
              <StatCard
                value="$444B"
                description="global economic activity"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="mb-6 text-base font-medium leading-6 text-sky-900 uppercase">
            Explore the world's largest commerce community
          </h2>
          <div className="grid gap-6 grid-cols-[repeat(5,232.8px)] max-md:gap-5 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
            <FeatureCard
              title="Enterprise"
              description="The modern, composable stack for enterprise retail"
              icon={<svg id="1:533" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon" style={{width: "56px", height: "56px"}}>
                <g clipPath="url(#clip0_1_533)">
                  <path d="M27.9951 56C43.4591 56 55.9951 43.464 55.9951 28C55.9951 12.536 43.4591 0 27.9951 0C12.5311 0 -0.00488281 12.536 -0.00488281 28C-0.00488281 43.464 12.5311 56 27.9951 56Z" fill="#E5FDF3"></path>
                  <path d="M27.995 47.8333C38.9486 47.8333 47.8283 38.9536 47.8283 28C47.8283 17.0463 38.9486 8.16663 27.995 8.16663C17.0413 8.16663 8.16162 17.0463 8.16162 28C8.16162 38.9536 17.0413 47.8333 27.995 47.8333Z" fill="#AEF2D7"></path>
                  <path d="M27.995 19.5416L36.4533 24.5L27.995 29.4583L19.5366 24.5L27.995 19.5416Z" stroke="#2D7156" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M24.7866 28L19.5366 31.5L27.995 36.4583L36.4533 31.5L31.1125 28" stroke="#2D7156" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_533">
                    <rect width="56" height="56" fill="white" transform="translate(-0.00488281)"></rect>
                  </clipPath>
                </defs>
              </svg>}
            />
            <FeatureCard
              title="Plus"
              description="A commerce solution for growing digital brands"
              icon={<svg id="1:545" width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon" style={{width: "56px", height: "56px"}}>
                <g clipPath="url(#clip0_1_545)">
                  <path d="M28.7949 56C44.2589 56 56.7949 43.464 56.7949 28C56.7949 12.536 44.2589 0 28.7949 0C13.3309 0 0.794922 12.536 0.794922 28C0.794922 43.464 13.3309 56 28.7949 56Z" fill="#FEF4F6"></path>
                  <path d="M28.7948 47.8333C39.7484 47.8333 48.6281 38.9536 48.6281 28C48.6281 17.0463 39.7484 8.16663 28.7948 8.16663C17.8411 8.16663 8.96143 17.0463 8.96143 28C8.96143 38.9536 17.8411 47.8333 28.7948 47.8333Z" fill="#FFE9F1"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.999 25.0374C24.9662 25.0035 24.9328 24.9701 24.899 24.9374C23.3198 23.4134 20.8041 23.4582 19.2801 25.0374L19.2005 25.1199C17.6052 26.773 17.6052 29.3922 19.2005 31.0453C19.2323 31.0782 19.2647 31.1106 19.2977 31.1425C20.8329 32.624 23.2785 32.5805 24.7601 31.0453L27.7785 27.9176L24.999 25.0374ZM32.8297 31.0453C34.3112 32.5805 36.7568 32.624 38.2921 31.1425C38.325 31.1106 38.3574 31.0782 38.3892 31.0453C39.9845 29.3922 39.9845 26.773 38.3892 25.1199L38.3096 25.0374C36.7856 23.4582 34.2699 23.4134 32.6907 24.9374C32.6569 24.9701 32.6235 25.0035 32.5907 25.0374L29.8114 27.9176L32.8297 31.0453ZM28.7949 26.6607L29.8698 25.5468H29.9492L29.9096 25.5057L31.4364 23.9235C31.4824 23.8758 31.5292 23.8291 31.5768 23.783C33.7936 21.6438 37.3247 21.7067 39.4639 23.9235L39.5436 24.006C41.7386 26.2805 41.7386 29.8847 39.5436 32.1592C39.4986 32.2059 39.4527 32.2517 39.406 32.2968C37.2332 34.3936 33.7721 34.332 31.6754 32.1592L29.9096 30.3</div>;
};
