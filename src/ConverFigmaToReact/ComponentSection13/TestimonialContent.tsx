
import TestimonialNavButton from "./TestimonialNavButton";

const TestimonialContent: React.FC = () => {
  return (
    <article className="pt-8 pb-32 min-w-60 w-[661px] max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col pt-14 w-full max-w-[661px] max-md:max-w-full">
        <blockquote className="self-start text-5xl text-black leading-[52px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          in our garage to needing a<br />
          10,000 sq. ft facility to meet
          <br />
          customer demand.
        </blockquote>

        <footer className="mt-20 text-black max-md:mt-10 max-md:-mr-1 max-md:max-w-full">
          <h3 className="text-3xl leading-tight">BLK & Bold</h3>
          <p className="pb-px mt-4 text-base pr-[498px] max-md:pr-5 max-md:max-w-full">
            Rod Johnson — Owner
          </p>
        </footer>

        <div className="flex flex-wrap gap-3 mt-16 pr-[553px] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <TestimonialNavButton
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/487ee01c5f40c002d20bac73d3d571d29a5f09be?placeholderIfAbsent=true&apiKey=70cfbdbf53fc4c448544cbdad94d93bb"
            ariaLabel="Previous testimonial"
          />
          <TestimonialNavButton
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7127df7fc8a538df47156ff61c622823aee27618?placeholderIfAbsent=true&apiKey=70cfbdbf53fc4c448544cbdad94d93bb"
            ariaLabel="Next testimonial"
          />
        </div>
      </div>
    </article>
  );
};

export default TestimonialContent;
