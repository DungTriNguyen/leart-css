import * as React from "react";
import SupportCardButton from "./SupportCardButton";

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
}

/**
 * SupportCard component displays a card with an icon, title, description, and CTA button
 */
const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  title,
  description,
  ctaText,
}) => {
  return (
    <article className="h-[380px]">
      <div className="relative p-px h-full rounded-2xl border border-solid border-zinc-900 max-sm:p-6">
        <div className="flex justify-center items-center mt-12 mr-0 mb-0 ml-12 w-14 h-14 rounded-2xl max-sm:mt-6 max-sm:mr-0 max-sm:mb-0 max-sm:ml-6">
          <div className="[&>svg]:stroke-black">{icon}</div>
        </div>

        <h3 className="mt-8 mr-0 mb-4 ml-12 text-4xl leading-10 text-white max-sm:mt-6 max-sm:mr-0 max-sm:mb-3 max-sm:ml-6">
          {title}
        </h3>

        <p className="mx-12 my-0 text-lg leading-7 text-white max-w-[434px] max-sm:mx-6 max-sm:my-0">
          {description}
        </p>

        <SupportCardButton text={ctaText} />
      </div>
    </article>
  );
};

export default SupportCard;
