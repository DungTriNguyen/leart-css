
import * as React from "react";

interface CtaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * CtaButton component - A styled button for call-to-action elements
 */
export function CtaButton({ children, onClick }: CtaButtonProps) {
  return (
    <button
      className="px-7 py-3.5 text-lg tracking-normal leading-7 text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
