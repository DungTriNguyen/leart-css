import * as React from "react";

interface SupportCardButtonProps {
  text: string;
}

/**
 * SupportCardButton component displays a button with text and an arrow icon
 */
const SupportCardButton: React.FC<SupportCardButtonProps> = ({ text }) => {
  return (
    <button className="inline-flex gap-3 items-center px-3.5 py-1.5 mt-11 mr-0 mb-0 ml-12 text-base leading-6 text-white rounded-3xl border border-gray-800 border-solid bg-zinc-900 max-sm:mt-8 max-sm:mr-0 max-sm:mb-0 max-sm:ml-6">
      <span>{text}</span>
      <div>
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_arrow)">
            <path
              d="M6.5 7.97988L1.4 13.1799L0 11.7799L3.7 7.97988L0 4.27988L1.4 2.87988"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_arrow">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="translate(0 0.879883)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </button>
  );
};

export default SupportCardButton;
