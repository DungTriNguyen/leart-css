import React from "react";
import Footer from "./FooterFinal";
import FontLoader from "./FontLoader";

const FooterWithFontLoader: React.FC = () => {
  return (
    <>
      <FontLoader />
      <Footer />
    </>
  );
};

export default FooterWithFontLoader;
