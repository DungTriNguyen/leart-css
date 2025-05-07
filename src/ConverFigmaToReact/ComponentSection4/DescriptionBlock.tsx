import React from "react";
import ArrowIcon from "./ArrowIcon";

interface DescriptionBlockProps {
  description: string;
  buttonText: string;
}

const DescriptionBlock: React.FC<DescriptionBlockProps> = ({
  description,
  buttonText,
}) => {
  return (
    <div className="flex flex-col gap-16 items-start max-w-[420px] max-md:max-w-full">
      <p className="text-base tracking-tight leading-6 text-zinc-700">
        {description}
      </p>
      <button className="flex gap-5 items-center pb-4 w-full border border-black">
        <span className="text-lg font-medium leading-7 text-black">
          {buttonText}
        </span>
        <ArrowIcon />
      </button>
    </div>
  );
};

export default DescriptionBlock;
