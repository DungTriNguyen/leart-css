import * as React from "react";
import FooterColumn from "./FooterColumn";
// import FooterLink from "./FooterLink";
import FooterLink from "./FooterLink";

const Footer: React.FC = () => {
  return (
    <div className="px-24 max-md:px-5">
      <div className="flex flex-wrap gap-10 justify-between py-20 w-full max-md:max-w-full">
        {/* Logo section */}
        <div className="flex flex-col items-start pr-16 min-w-[100px] pb-[584px] w-[100px] max-md:pb-24">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd04ad3fc8d2faa96de8e304ff5385a017ee51c1?placeholderIfAbsent=true&apiKey=70cfbdbf53fc4c448544cbdad94d93bb"
            className="object-contain aspect-[0.89] w-[39px]"
            alt="Shopify logo"
          />
        </div>

        {/* Links section */}
        <div className="min-w-60 w-[993px] max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="max-md:-mr-1 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {/* First row of columns */}
                <FooterColumn
                  title="Shopify"
                  className="w-1/5 max-md:ml-0 max-md:w-full"
                  links={[
                    { text: "About", href: "#" },
                    { text: "Careers", href: "#" },
                    { text: "Investors", href: "#" },
                    { text: "Press and Media", href: "#" },
                    { text: "Partners", href: "#" },
                    { text: "Affiliates", href: "#" },
                    { text: "Legal", href: "#" },
                    { text: "Service status", href: "#" },
                  ]}
                />

                <FooterColumn
                  title="Support"
                  className="ml-5 w-[24%] max-md:ml-0 max-md:w-full"
                  containerClassName="pb-28 max-md:pb-24"
                  links={[
                    { text: "Merchant support", href: "#" },
                    { text: "Help center", href: "#" },
                    { text: "Hire a Partner", href: "#" },
                    { text: "Shopify Community", href: "#" },
                    { text: "Shopify Events", href: "#" },
                  ]}
                />

                <FooterColumn
                  title="Developers"
                  className="ml-5 w-[23%] max-md:ml-0 max-md:w-full"
                  containerClassName="pb-44 max-md:pb-24"
                  links={[
                    { text: "Shopify.dev", href: "#" },
                    { text: "API documentation", href: "#" },
                    { text: "Dev Degree", href: "#" },
                  ]}
                />

                <FooterColumn
                  title="Products"
                  className="ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                  containerClassName="pb-20"
                  links={[
                    { text: "Shop", href: "#" },
                    { text: "Shop Pay", href: "#" },
                    { text: "Shopify Plus", href: "#" },
                    { text: "Shopify Fulfillment Network", href: "#" },
                    { text: "Linkpop", href: "#" },
                    { text: "Shopify for enterprise", href: "#" },
                  ]}
                />
              </div>
            </div>

            {/* Second row of columns */}
            <div className="z-10 mt-20 max-w-full w-[416px] max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col">
                <FooterColumn
                  title="Global impact"
                  className="w-[41%] max-md:ml-0 max-md:w-full"
                  links={[
                    { text: "Sustainability", href: "#" },
                    { text: "Social impact", href: "#" },
                    { text: "Build Black", href: "#" },
                    { text: "Build Native", href: "#" },
                    { text: "Research", href: "#" },
                  ]}
                />

                <FooterColumn
                  title="Solutions"
                  className="ml-5 w-[59%] max-md:ml-0 max-md:w-full"
                  containerClassName="pb-20"
                  links={[
                    { text: "Online store builder", href: "#" },
                    { text: "Website builder", href: "#" },
                    { text: "Ecommerce website", href: "#" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
