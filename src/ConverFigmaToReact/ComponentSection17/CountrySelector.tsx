import React from "react";
import { GlobeIcon, ChevronIcon } from "./icons";

const CountrySelector: React.FC = () => {
  return (
    <button className="flex items-center px-0 py-3 cursor-pointer">
      <span className="flex items-center pr-1 w-5">
        <GlobeIcon />
      </span>
      <span className="text-base leading-6 text-zinc-900">USA</span>
      <span className="flex items-center pl-2 w-5">
        <ChevronIcon />
      </span>
    </button>
  );
};

export default CountrySelector;
