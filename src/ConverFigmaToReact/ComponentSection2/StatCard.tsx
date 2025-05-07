import React from "react";

interface StatCardProps {
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, description }) => {
  return (
    <article className="flex gap-4 items-start">
      <div className="w-1 h-20 rounded-sm bg-sky-500" />
      <div className="flex flex-col gap-1">
        <h3 className="text-4xl font-medium leading-10 text-black max-sm:text-3xl max-sm:leading-9">
          {value}
        </h3>
        <p className="text-lg leading-7 text-zinc-600 max-sm:text-base max-sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
};

export default StatCard;
