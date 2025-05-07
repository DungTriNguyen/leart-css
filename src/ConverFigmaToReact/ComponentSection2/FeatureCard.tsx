import React, { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <article className="p-6 bg-white rounded-lg shadow-2xl max-sm:p-5">
      <div className="mb-7 w-14 h-14">{icon}</div>
      <div className="mt-2">
        <h3 className="mb-2 text-lg font-medium leading-7 text-black">
          {title}
        </h3>
        <p className="text-base leading-6 text-zinc-600">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
