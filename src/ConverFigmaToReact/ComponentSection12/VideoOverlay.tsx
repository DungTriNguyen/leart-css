import React from "react";
import PlayButton from "./PlayButton";

/**
 * VideoOverlay component displays a video introduction section with a play button
 * and information about Muck N Brass and its founder.
 */
const VideoOverlay: React.FC = () => {
  return (
    <section className="flex relative flex-col items-start text-white bg-black bg-opacity-50 pr-[975px] pt-[537px] max-md:pt-24 max-md:pr-5">
      <header className="z-0 p-12 max-w-full w-[285px] max-md:px-5">
        <h2 className="text-3xl leading-tight">Muck N Brass</h2>
        <p className="pr-16 mt-3 w-full text-lg leading-loose max-md:pr-5">
          Zoey, Founder
        </p>
      </header>

      <PlayButton />
    </section>
  );
};

export default VideoOverlay;
