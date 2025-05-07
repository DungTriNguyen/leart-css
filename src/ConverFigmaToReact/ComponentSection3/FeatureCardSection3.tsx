import React, { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: ReactNode;
  linkText: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  linkText,
  className = "",
}) => {
  return (
    <article className={`min-w-60 w-[404px] ${className}`}>
      <div className="pb-4 w-full">
        <div className="pt-6 w-full rounded">
          <h3 className="pr-44 w-full text-xl leading-none max-md:pr-5">
            {title}
          </h3>
          <p className="pr-3 mt-3 w-full text-lg leading-7">{description}</p>
        </div>
      </div>
      <a
        href="#"
        className="flex items-center pr-64 w-full text-base leading-loose underline max-md:pr-5"
      >
        <span className="self-stretch pb-px my-auto">{linkText}</span>
      </a>
    </article>
  );
};

export default FeatureCard;
