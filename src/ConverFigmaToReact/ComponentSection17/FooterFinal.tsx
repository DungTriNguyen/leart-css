
import React from "react";
import CountrySelector from "./CountrySelector";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";

const FooterFinal: React.FC = () => {
  return (
    <footer className="px-24 py-0 bg-white border-t border-solid border-t-black border-t-opacity-20 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <div className="flex justify-between items-start px-0 py-8 max-sm:flex-col max-sm:gap-8">
        <div className="flex gap-14 items-start pt-1 max-md:flex-col max-md:gap-6">
          <CountrySelector />
          <FooterLinks />
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default FooterFinal;
