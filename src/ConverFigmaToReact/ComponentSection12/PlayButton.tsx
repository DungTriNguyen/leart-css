import React from "react";

/**
 * PlayButton component renders a circular play button for video content
 */
const PlayButton: React.FC = () => {
  const handlePlayClick = () => {
    // Video play functionality would be implemented here
    console.log("Play video clicked");
  };

  return (
    <button
      onClick={handlePlayClick}
      aria-label="Play Muck N Brass video"
      className="flex absolute z-0 w-32 max-w-full rounded-full border border-white border-solid inset-x-[566px] inset-y-[290px] min-h-32 items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors"
    >
      {/* Play icon could be added here */}
    </button>
  );
};

export default PlayButton;
