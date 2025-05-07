import React, { ReactNode } from "react";

interface IconButtonProps {
  backgroundColor: string;
  size: string;
  icon: ReactNode;
  hasShadow?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  backgroundColor,
  size,
  icon,
  hasShadow = false,
}) => {
  return (
    <span
      className={`flex justify-center items-center ${size} ${backgroundColor} rounded-full ${
        hasShadow ? "shadow-sm" : ""
      }`}
    >
      {icon}
    </span>
  );
};

export default IconButton;
