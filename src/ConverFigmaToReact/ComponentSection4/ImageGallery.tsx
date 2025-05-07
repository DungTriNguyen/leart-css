import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageProps[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="flex justify-between items-center px-24 w-full max-md:flex-col max-md:gap-8 max-md:px-10 max-sm:px-5">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-[404px] h-[404px] object-cover max-lg:w-full max-lg:h-auto"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
