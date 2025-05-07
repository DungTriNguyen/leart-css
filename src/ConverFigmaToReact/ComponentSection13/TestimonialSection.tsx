import React from "react";
import TestimonialContent from "./TestimonialContent";
import TestimonialImage from "./TestimonialImage";

const TestimonialSection: React.FC = () => {
  return (
    <section className="flex px-24 max-md:px-5">
      <div className="flex flex-wrap items-start h-full min-w-60 max-md:max-w-full">
        <TestimonialContent />
        <TestimonialImage />
      </div>
    </section>
  );
};

export default TestimonialSection;
