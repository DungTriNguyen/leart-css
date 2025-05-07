import ComponentAddNewProduct from "./ComponentTestCallApiUseEffect/ComponentAddNewProduct";
import ComponentAllProduct from "./ComponentTestCallApiUseEffect/ComponentAllProduct";
import ComponentDeleteProduct from "./ComponentTestCallApiUseEffect/ComponentDeleteProduct";
import ComponentGetProductCategory from "./ComponentTestCallApiUseEffect/ComponentGetProductCategory";
import ComponentGetProductID from "./ComponentTestCallApiUseEffect/ComponentGetProductID";
import ComponentSearchProduct from "./ComponentTestCallApiUseEffect/ComponentSearchProduct";
import ComponentSkipAndLimitProduct from "./ComponentTestCallApiUseEffect/ComponentSkipAndLimitProduct";
import ComponentSortProduct from "./ComponentTestCallApiUseEffect/ComponentSortProduct";
import ComponentUpdatePATChProduct from "./ComponentTestCallApiUseEffect/ComponentUpdatePATCHProduct";
import ComponentUpdatePUTProduct from "./ComponentTestCallApiUseEffect/ComponentUpdatePUTProduct";
// import "./App.css";
import ResponsivePage from "./ConverFigmaToReact";
import ShopifyPage from "./ConverFigmaToReact/ShopifyPage";
import ShopifyStats from "./ConverFigmaToReact/ComponentSection2/ShopifyStats";
import DonationPage from "./ConverFigmaToReact/test";
import Test from "./ConverFigmaToReact/test";
import VolunteerPage from "./ConverFigmaToReact/VolunteerPage";
import StoreSection from "./ConverFigmaToReact/ComponentSection3/StoreSection";
import SalesChannels from "./ConverFigmaToReact/ComponentSection4/SalesChannels";
import CheckoutShowcase from "./ConverFigmaToReact/ComponentSection5/CheckoutShowcase";
import PointOfSaleSection from "./ConverFigmaToReact/ComponentSection6/PointOfSaleSection";
import MarketingTools from "./ConverFigmaToReact/ComponentSection7/MarketingTools";
import BusinessOperations from "./ConverFigmaToReact/ComponentSection8/BusinessOperation";
import MarqueeTrialBanner from "./ConverFigmaToReact/ComponentSection10/MarqueeTrialBanner";
import EnhancedInputDesign from "./ConverFigmaToReact/ComponentSection11/EnhancedInputDesign";
import MerchantShowcase from "./ConverFigmaToReact/ComponentSection11/MerchantShowcase";
import VideoOverlay from "./ConverFigmaToReact/ComponentSection12/VideoOverlay";
import TestimonialSection from "./ConverFigmaToReact/ComponentSection13/TestimonialSection";
import ShopifySupport from "./ConverFigmaToReact/ComponentSection14/ShopifySupport";
import HeroCta from "./ConverFigmaToReact/ComponentSection15/HeroCta";
import FooterLink from "./ConverFigmaToReact/ComponentSection16/FooterLink";
import Footer from "./ConverFigmaToReact/ComponentSection16/Footer";
import FooterFinal from "./ConverFigmaToReact/ComponentSection17/FooterFinal";
import HeroSection from "./ConverFigmaToReact/ComponentSection1/HeroSectionHeader";
import Home from "./index.scss";

function App() {
  const getProductId: number = 5;
  return (
    <>
      {/* <ComponentAllProduct />
      <ComponentGetProductID getProductId={getProductId} />
      <ComponentSearchProduct />
      <ComponentSkipAndLimitProduct />
      <ComponentSortProduct />
      <ComponentGetProductCategory />
      <ComponentAddNewProduct />
      <ComponentUpdatePUTProduct />
      <ComponentUpdatePATChProduct />
      <ComponentDeleteProduct /> */}
      {/* <ResponsivePage /> */}
      {/* <VolunteerPage /> */}
      {/* <ShopifyPage /> */}
      {/* <DonationPage /> */}
      {/* <HeroSection />
      <ShopifyStats />
      <StoreSection />
      <SalesChannels />
      <CheckoutShowcase />
      <PointOfSaleSection />
      <MarketingTools />
      <BusinessOperations />
      <MarqueeTrialBanner />
      <MerchantShowcase />
      <VideoOverlay />
      <TestimonialSection />
      <ShopifySupport />
      <HeroCta />
      <Footer />
      <FooterFinal /> */}
      <Home />
    </>
  );
}

export default App;
