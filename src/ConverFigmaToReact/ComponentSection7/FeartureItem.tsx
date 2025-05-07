import React from "react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  progressPercentage: number;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
  progressPercentage,
}) => {
  return (
    <article className="flex mb-16 max-sm:flex-col max-sm:gap-5">
      <div className="flex justify-center items-center p-1 mr-8 w-8 h-8 rounded-full max-sm:mb-4">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="mb-7 text-2xl leading-7 max-sm:text-2xl">{title}</h3>
        <p className="mb-7 text-lg leading-7 text-zinc-600 max-sm:text-base">
          {description}
        </p>
        <div className="w-full bg-zinc-300 h-[17px]">
          <div
            className="h-full bg-black"
            style={{ width: `${progressPercentage}%` }}
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
            aria-label={`Progress for ${title}`}
          />
        </div>
      </div>
    </article>
  );
};
