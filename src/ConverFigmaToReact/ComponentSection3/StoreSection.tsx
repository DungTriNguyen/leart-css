import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCardSection3";
import ProgressBar from "./ProgressBar";

const StoreSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-24 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center pr-96 w-full max-md:pr-5 max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <SectionHeader
              subtitle="Build an online store"
              title="Your store, your way"
            />
          </div>
        </div>
      </div>

      <div className="px-24 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex overflow-hidden flex-col justify-center w-full rounded-xl bg-white bg-opacity-0 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:max-w-full">
                <div className="flex-1 w-full max-md:max-w-full">
                  <div className="flex flex-col justify-center max-md:max-w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b905302ebbfe893e25fb55fb74a098e97d080afa?placeholderIfAbsent=true&apiKey=70cfbdbf53fc4c448544cbdad94d93bb"
                      alt="Online store showcase"
                      className="object-contain flex-1 w-full aspect-[2.32] max-w-[1260px] max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-between mt-7">
              <ProgressBar />
              <ProgressBar />
              <ProgressBar />
            </div>

            <div className="flex flex-wrap gap-6 justify-between mt-5 text-zinc-600">
              <FeatureCard
                title="Build an online storefront"
                description={
                  <>
                    Bring your vision to life with our drag-and-drop
                    <br />
                    store creator. No coding expertise required —
                    <br />
                    just your next big idea.
                  </>
                }
                linkText="Online Store Builder"
              />

              <FeatureCard
                title="Craft the brand you want"
                description={
                  <>
                    Select from customizable templates created by a
                    <br />
                    community of world-class designers.
                  </>
                }
                linkText="Theme Store"
                className="pb-7"
              />

              <FeatureCard
                title="Level up with apps"
                description={
                  <>
                    Add more features and functionality to your
                    <br />
                    online store with apps built by trusted Shopify
                    <br />
                    developers.
                  </>
                }
                linkText="Shopify App Store"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
