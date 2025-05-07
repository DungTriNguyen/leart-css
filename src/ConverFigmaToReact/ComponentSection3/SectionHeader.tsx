import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="w-full max-md:max-w-full">
      <div className="pb-2 w-full text-base tracking-tight leading-none text-sky-900 uppercase pr-[650px] max-md:pr-5 max-md:max-w-full">
        {subtitle}
      </div>
      <h2 className="pr-96 pb-px w-full text-5xl tracking-tighter leading-none text-black max-md:pr-5 max-md:max-w-full max-md:text-4xl">
        {title}
      </h2>
    </header>
  );
};

export default SectionHeader;
