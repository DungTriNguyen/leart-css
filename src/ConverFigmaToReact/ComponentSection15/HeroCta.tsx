"use client";
import * as React from "react";
import { HeroCtaHeading } from "./HeroCtaHeading";
import { CtaButton } from "./CtaButton";

/**
 * HeroCta component - A call-to-action section with gradient background
 * featuring a heading, subheading, and action button
 */
function HeroCta() {
  return (
    <section className="flex flex-col justify-center items-center px-80 py-16 w-full bg-[linear-gradient(135deg,#5FD5B6_0%,#4BFE85_100%)] max-md:px-16 max-sm:px-6">
      <div className="flex flex-col gap-6 items-center w-full">
        <HeroCtaHeading
          title="Grow your business here"
          description="Whether you want to sell products down the street or around the world, we have all the tools you need."
        />
        <div className="flex justify-center items-center w-full">
          <CtaButton>Start free trial</CtaButton>
        </div>
      </div>
    </section>
  );
}

export default HeroCta;
