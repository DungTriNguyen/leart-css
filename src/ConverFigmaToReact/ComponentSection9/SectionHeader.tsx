import React from "react";
import ActionButton from "./ActionButton";

interface SectionHeaderProps {
  title: string;
  heading: string;
  actionText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  heading,
  actionText,
}) => {
  return (
    <>
      <header>
        <h2 className="mb-8 text-base font-medium leading-6 text-sky-900 uppercase">
          {title}
        </h2>
        <div className="flex justify-between items-end mb-24 max-md:flex-col max-md:gap-8 max-md:items-start">
          <h1 className="max-w-2xl text-5xl tracking-tighter leading-[56px] max-sm:text-3xl max-sm:leading-10">
            {heading}
          </h1>
          <ActionButton text={actionText} />
        </div>
      </header>
    </>
  );
};

export default SectionHeader;
