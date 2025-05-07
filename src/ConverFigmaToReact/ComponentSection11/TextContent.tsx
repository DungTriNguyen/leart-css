import React from "react";

const TextContent: React.FC = () => {
  return (
    <article className="flex-1 px-0 py-20 mx-10 my-0 text-center max-w-[630px] max-md:px-0 max-md:py-10 max-md:mx-0 max-md:my-10">
      <header className="mb-8 text-base text-black uppercase max-sm:text-sm">
        MERCHANT OBSESSED
      </header>
      <div className="flex flex-col items-center">
        <h1 className="m-0 text-8xl tracking-tighter leading-none text-black max-md:text-7xl max-sm:text-5xl max-sm:tracking-tighter">
          Meet
        </h1>
        <h1 className="m-0 text-8xl tracking-tighter leading-none text-black max-md:text-7xl max-sm:text-5xl max-sm:tracking-tighter">
          the people
        </h1>
        <h1 className="m-0 text-8xl tracking-tighter leading-none text-black max-md:text-7xl max-sm:text-5xl max-sm:tracking-tighter">
          who chose
        </h1>
        <h1 className="m-0 text-8xl tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 max-md:text-7xl max-sm:text-5xl max-sm:tracking-tighter">
          Shopify
        </h1>
      </div>
    </article>
  );
};

export default TextContent;
