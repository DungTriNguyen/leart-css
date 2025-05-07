import React, { ReactNode } from "react";

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
  isActive,
}) => {
  const textColor = isActive ? "text-black" : "text-zinc-600";

  return (
    <article className="flex mb-16">
      <div className="flex justify-center items-center mr-8 w-8 h-8 rounded-full">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className={`mb-7 text-2xl leading-7 ${textColor} max-sm:text-2xl`}>
          {title}
        </h3>
        <p
          className={`mb-7 text-lg leading-7 ${textColor} max-sm:text-base max-sm:leading-6`}
        >
          {description}
        </p>
        <div className="w-full bg-zinc-300 h-[17px]">
          {isActive && <div className="bg-black size-full" />}
        </div>
      </div>
    </article>
  );
};

export default FeatureItem;
