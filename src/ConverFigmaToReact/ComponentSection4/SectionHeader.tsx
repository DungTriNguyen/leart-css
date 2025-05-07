import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => {
  return (
    <header className="flex flex-col items-start w-full">
      <span className="mb-2 text-base tracking-tight leading-4 text-black uppercase">
        {label}
      </span>
      <h2 className="text-5xl tracking-tighter text-black leading-[56px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
        {title}
      </h2>
    </header>
  );
};

export default SectionHeader;
