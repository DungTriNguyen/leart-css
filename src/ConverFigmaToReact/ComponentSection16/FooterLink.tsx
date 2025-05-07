import React from "react";

export interface FooterLinkProps {
  text: string;
  href: string;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  text,
  href,
  className = "",
}) => {
  return (
    <div className={`py-0.5 w-full ${className}`}>
      <a href={href} className="hover:underline">
        {text}
      </a>
    </div>
  );
};

export default FooterLink;
