import React from "react";

interface TestimonialNavButtonProps {
  iconSrc: string;
  ariaLabel: string;
  onClick?: () => void;
}

const TestimonialNavButton: React.FC<TestimonialNavButtonProps> = ({
  iconSrc,
  ariaLabel,
  onClick,
}) => {
  return (
    <button
      className="flex items-start p-4 w-12 h-12 rounded-full border-2 border-black border-solid"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img
        src={iconSrc}
        alt=""
        className="object-contain w-4 aspect-square"
        aria-hidden="true"
      />
    </button>
  );
};

export default TestimonialNavButton;
