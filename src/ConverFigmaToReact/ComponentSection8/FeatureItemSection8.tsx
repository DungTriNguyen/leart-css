import React, { ReactNode } from "react";
import IconButton from "./IconButton";

interface FeatureItemProps {
  icon: ReactNode;
  iconBgColor: string;
  title: string;
  description: string;
  isActive: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  iconBgColor,
  title,
  description,
  isActive,
}) => {
  const textColor = isActive ? "text-black" : "text-zinc-600";

  return (
    <article className="flex gap-8 items-start">
      <IconButton
        backgroundColor={iconBgColor}
        size="w-8 h-8"
        icon={icon}
        hasShadow={true}
      />
      <div className="flex-1">
        <h3 className={`mb-7 text-2xl leading-7 ${textColor}`}>{title}</h3>
        <p className={`mb-7 text-lg leading-7 ${textColor}`}>{description}</p>
        <div className="w-full bg-zinc-300 h-[17px]">
          {isActive && <div className="bg-black size-full" />}
        </div>
      </div>
    </article>
  );
};

export default FeatureItem;
