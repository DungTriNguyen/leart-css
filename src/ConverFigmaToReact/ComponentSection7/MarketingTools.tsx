import * as React from "react";
import { FeatureItem } from "./FeartureItem";
import { ArrowIcon } from "./ArowIcon";
import { PlayIcon } from "./PlayIcon";
import { HashtagIcon, EmailIcon, ChartIcon } from "./FeartureIcons";

export function MarketingTools() {
  return (
    <section className="px-5 py-0 mx-auto my-0 max-w-[1260px] max-md:max-w-[991px] max-sm:max-w-screen-sm font-['Lato']">
      <header>
        <h3 className="mb-8 text-base font-medium leading-6 text-sky-900 uppercase">
          BUILT-IN MARKETING TOOLS
        </h3>
        <div className="flex justify-between items-end mb-24 max-md:flex-col max-md:gap-5 max-md:items-start">
          <h2 className="max-w-2xl text-5xl tracking-tighter leading-[56px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
            From first touch to full funnel
          </h2>
          <div className="min-w-96 max-md:w-full max-md:min-w-[unset]">
            <button className="flex justify-between items-center pb-4 w-full text-lg font-medium leading-7 border-b border-solid cursor-pointer border-b-black">
              <span>Leverage our full marketing suite</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </header>

      <div className="flex gap-10 justify-between max-md:flex-col">
        <div className="flex-1 max-w-screen-md">
          <FeatureItem
            icon={<HashtagIcon />}
            title="Reach new leads"
            description="Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are."
            progressPercentage={0}
          />

          <FeatureItem
            icon={<EmailIcon />}
            title="Engage with customers"
            description="Build custom email campaigns, set automations to serve every segment, and connect with customers on the go with integrated messaging tools."
            progressPercentage={0}
          />

          <FeatureItem
            icon={<ChartIcon />}
            title="Data you can build on"
            description="Take control of your customer data to build custom audiences and explore the customer insights that drive ongoing growth."
            progressPercentage={0}
          />
        </div>

        <div className="flex-1">
          <div className="relative w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/62465b43df1a9a052051c12ad9245e6e497953d8"
              className="w-full h-auto rounded-lg"
              alt="Marketing dashboard"
            />
            <button
              className="flex absolute right-0 bottom-2 justify-center items-center w-11 h-11 bg-black rounded-full cursor-pointer"
              aria-label="Play video"
            >
              <PlayIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketingTools;
