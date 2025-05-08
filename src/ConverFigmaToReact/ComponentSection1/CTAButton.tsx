import React from "react";

interface CTAButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  primary = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-7 py-3.5 text-lg flex tracking-normal leading-7 rounded-full cursor-pointer
        ${
          primary
            ? "bg-white text-black"
            : "bg-white bg-opacity-10 border border-white border-opacity-40 text-white"
        }
      `}
    >
      {children}
    </button>
  );
};

export default CTAButton;
