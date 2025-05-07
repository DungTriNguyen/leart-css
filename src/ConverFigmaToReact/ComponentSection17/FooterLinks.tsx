import React from "react";

const FooterLinks: React.FC = () => {
  const links = [
    "Terms of Service",
    "Privacy Policy",
    "Sitemap",
    "Privacy Choices",
  ];

  return (
    <nav className="flex flex-wrap gap-10 max-md:gap-5 max-sm:flex-col">
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="px-0 py-3 text-base leading-6 cursor-pointer text-zinc-900"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default FooterLinks;
