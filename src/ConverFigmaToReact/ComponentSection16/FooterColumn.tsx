import React from "react";
import FooterLink, { FooterLinkProps } from "./FooterLink";

interface FooterColumnProps {
  title: string;
  links: FooterLinkProps[];
  className?: string;
  containerClassName?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  className = "",
  containerClassName = "",
}) => {
  return (
    <div className={`${className}`}>
      <div className={`grow text-base max-md:mt-10 ${containerClassName}`}>
        <h3 className="pb-px w-full text-black whitespace-nowrap">{title}</h3>
        <nav className={`mt-6 max-w-full text-zinc-900`}>
          {links.map((link, index) => (
            <FooterLink
              key={index}
              text={link.text}
              href={link.href}
              className={index > 0 ? "mt-2" : ""}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default FooterColumn;
