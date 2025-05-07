import FeatureCard from "./ComponentSection2/FeatureCard";
import StatCard from "./ComponentSection2/StatCard";

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
            <StatCard value="Millions" description="of merchants worldwide" />
            <StatCard value="170+" description="countries represented" />
            <StatCard value="10%" description="of total US ecommerce" />
            <StatCard value="$444B" description="global economic activity" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="mb-6 text-base font-medium leading-6 text-sky-900 uppercase">
          Explore the world's largest commerce community
        </h2>
      </div>
    </section>
  );
};

export default ShopifyStats;
