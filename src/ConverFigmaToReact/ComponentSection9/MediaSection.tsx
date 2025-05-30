import React from "react";

interface MediaSectionProps {
  imageUrl: string;
  altText: string;
}

const MediaSection: React.FC<MediaSectionProps> = ({ imageUrl, altText }) => {
  return (
    <section className="relative flex-1 max-md:mb-10">
      <div className="relative w-full">
        <img
          src={imageUrl}
          className="w-full h-auto rounded-lg"
          alt={altText}
        />
        <button
          className="flex absolute right-0 bottom-2 justify-center items-center w-11 h-11 bg-black rounded-full cursor-pointer"
          aria-label="Play video"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6667 12.0067C22.6667 12.56 22.38 13.0707 21.912 13.3534L6.35667 22.7827C6.12113 22.9264 5.85128 23.004 5.57541 23.0075C5.29953 23.0111 5.02779 22.9403 4.78867 22.8027C4.54874 22.6642 4.34952 22.465 4.21107 22.2251C4.07262 21.9852 3.99982 21.713 4 21.436V2.57869C4 2.01336 4.302 1.49202 4.78867 1.21202C5.02775 1.07428 5.29951 1.00344 5.57541 1.00696C5.85131 1.01048 6.12118 1.08822 6.35667 1.23202L21.912 10.66C22.1431 10.8005 22.334 10.9983 22.4662 11.2342C22.5984 11.4702 22.6675 11.7362 22.6667 12.0067Z"
              fill="white"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default MediaSection;
