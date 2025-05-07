import * as React from "react";

interface HeroCtaHeadingProps {
  title: string;
  description: string;
}

/**
 * HeroCtaHeading component - Displays a title and description with responsive styling
 */
export function HeroCtaHeading({ title, description }: HeroCtaHeadingProps) {
  return (
    <header className="flex flex-col items-center w-full">
      <h2 className="w-full text-5xl tracking-tighter text-center text-black leading-[56px] max-w-[832px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
        {title}
      </h2>
      <p className="pt-4 w-full text-2xl tracking-tight leading-8 text-center text-black max-w-[832px] max-md:text-xl max-md:leading-7 max-sm:text-lg max-sm:leading-7">
        {description}
      </p>
    </header>
  );
}
