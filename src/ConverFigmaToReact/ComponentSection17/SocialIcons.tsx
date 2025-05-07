import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  TiktokIcon,
  LinkedinIcon,
  PinterestIcon,
} from "./icons";

const SocialIcons: React.FC = () => {
  const socialIcons = [
    { name: "Facebook", icon: <FacebookIcon /> },
    { name: "Twitter", icon: <TwitterIcon /> },
    { name: "YouTube", icon: <YoutubeIcon /> },
    { name: "Instagram", icon: <InstagramIcon /> },
    { name: "TikTok", icon: <TiktokIcon /> },
    { name: "LinkedIn", icon: <LinkedinIcon /> },
    { name: "Pinterest", icon: <PinterestIcon /> },
  ];

  return (
    <div className="flex gap-6 max-sm:justify-center">
      {socialIcons.map((social, index) => (
        <a
          key={index}
          href="#"
          className="w-8 h-8 cursor-pointer"
          aria-label={`Visit our ${social.name} page`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
