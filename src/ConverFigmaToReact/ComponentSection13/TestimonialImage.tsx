import React from "react";

const TestimonialImage: React.FC = () => {
  return (
    <aside className="pb-32 pl-12 min-w-60 w-[599px] max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col items-end px-16 max-w-full w-[551px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36c91a70bd258a6027431561483331ba0f30aa7?placeholderIfAbsent=true&apiKey=70cfbdbf53fc4c448544cbdad94d93bb"
          alt="BLK & Bold testimonial"
          className="object-contain z-10 -mb-6 w-full rounded-md aspect-[0.8] max-md:mb-2.5"
        />
      </div>
    </aside>
  );
};

export default TestimonialImage;
