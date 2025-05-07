import React from "react";

const PlayButton: React.FC = () => {
  return (
    <button
      className="flex relative justify-center items-center p-2.5 ml-2 w-11 h-11 bg-black rounded-full"
      aria-label="Play video"
    >
      <div className="relative w-6 h-6">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[24px] h-[24px]"
        >
          <g clipPath="url(#clip0_1_92)">
            <path
              d="M22.6667 11.6869C22.6667 12.2402 22.38 12.7509 21.912 13.0335L6.35667 22.4629C6.12113 22.6065 5.85128 22.6842 5.57541 22.6877C5.29953 22.6912 5.02779 22.6205 4.78867 22.4829C4.54874 22.3444 4.34952 22.1452 4.21107 21.9053C4.07262 21.6654 3.99982 21.3932 4 21.1162V2.25887C4 1.69353 4.302 1.1722 4.78867 0.8922C5.02775 0.754451 5.29951 0.683618 5.57541 0.687137C5.85131 0.690656 6.12118 0.768398 6.35667 0.9122L21.912 10.3402C22.1431 10.4807 22.334 10.6785 22.4662 10.9144C22.5984 11.1504 22.6675 11.4164 22.6667 11.6869Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_92">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.0200195)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </button>
  );
};

export default PlayButton;
