import React from "react";

interface ImageColumnProps {
  smallImageUrl: string;
  mediumImageUrl: string;
  largeImageUrl: string;
}

const ImageColumn: React.FC<ImageColumnProps> = ({
  smallImageUrl,
  mediumImageUrl,
  largeImageUrl,
}) => {
  return (
    <div className="flex relative flex-col w-[315px] max-md:mx-auto max-md:my-5 max-md:w-full max-md:max-w-[315px]">
      <figure className="mb-6 w-28 max-sm:mx-auto max-sm:my-2.5 max-sm:w-full max-sm:max-w-[200px]">
        <img src={smallImageUrl} alt="" className="w-full h-auto rounded-xl" />
      </figure>
      <figure className="w-52 max-sm:mx-auto max-sm:my-2.5 max-sm:w-full max-sm:max-w-[200px]">
        <img src={mediumImageUrl} alt="" className="w-full h-auto rounded-xl" />
      </figure>
      <figure className="mt-6 w-40 max-sm:mx-auto max-sm:my-2.5 max-sm:w-full max-sm:max-w-[200px]">
        <img src={largeImageUrl} alt="" className="w-full h-auto rounded-xl" />
      </figure>
    </div>
  );
};

export default ImageColumn;
