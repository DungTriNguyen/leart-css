"use client";

import React from "react";
import PlayButton from "./PlayButton";

const CheckoutShowcase: React.FC = () => {
  return (
    <section className="flex px-24 py-20 mx-auto w-full max-w-[1440px] max-md:px-10 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <div className="flex gap-20 justify-between items-start max-md:flex-col">
        <figure className="flex relative justify-center items-center w-[618px] max-md:w-full">
          <div className="flex flex-col justify-center items-start w-full">
            <div className="flex relative flex-col justify-center items-start w-full">
              <div className="relative w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0bfd71fb675777ad40474639adaec97f99ae7fe"
                  alt="Checkout showcase video thumbnail"
                  className="w-full h-auto aspect-square object-cover rounded-[4px]"
                />
              </div>
              <PlayButton />
            </div>
          </div>
        </figure>

        <article className="flex flex-col gap-16 items-start pt-32 max-w-[420px] w-[420px] max-md:gap-10 max-md:pt-16 max-md:w-full max-sm:pt-10">
          <header className="flex flex-col gap-2 items-start">
            <h3 className="text-base tracking-tight leading-4 text-black uppercase">
              FAST, RELIABLE CHECKOUT
            </h3>
            <h2 className="mt-4 text-4xl tracking-tighter leading-10 text-black max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
              The best-converting checkout on the planet
            </h2>
            <p className="mt-4 text-lg leading-7 text-black">
              Back your business with Shop Pay—the one-click checkout that's
              built to convert.
            </p>
          </header>

          <button className="flex gap-5 items-center pb-4 w-full border border-black">
            <span className="text-lg font-medium leading-7 text-black">
              Seize every sale
            </span>
            <span className="ml-auto">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px]"
              >
                <path
                  d="M21.2483 11.1717L15.2483 5.17173C15.1369 5.06032 15.0046 4.97194 14.8591 4.91164C14.7135 4.85135 14.5575 4.82031 14.3999 4.82031C14.0817 4.82031 13.7765 4.94672 13.5515 5.17173C13.4401 5.28314 13.3517 5.41541 13.2914 5.56098C13.2311 5.70655 13.2001 5.86257 13.2001 6.02013C13.2001 6.33834 13.3265 6.64352 13.5515 6.86853L17.5031 10.8201H3.5999C3.28164 10.8201 2.97642 10.9466 2.75137 11.1716C2.52633 11.3966 2.3999 11.7019 2.3999 12.0201C2.3999 12.3384 2.52633 12.6436 2.75137 12.8687C2.97642 13.0937 3.28164 13.2201 3.5999 13.2201H17.5031L13.5515 17.1717C13.3265 17.3967 13.2001 17.7019 13.2001 18.0201C13.2001 18.3383 13.3265 18.6435 13.5515 18.8685C13.7765 19.0935 14.0817 19.22 14.3999 19.22C14.7181 19.22 15.0233 19.0935 15.2483 18.8685L21.2483 12.8685C21.3598 12.7572 21.4483 12.6249 21.5087 12.4794C21.5691 12.3338 21.6001 12.1777 21.6001 12.0201C21.6001 11.8625 21.5691 11.7065 21.5087 11.5609C21.4483 11.4153 21.3598 11.2831 21.2483 11.1717Z"
                  fill="black"
                />
              </svg>
            </span>
          </button>
        </article>
      </div>
    </section>
  );
};

export default CheckoutShowcase;
