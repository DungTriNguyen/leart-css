import React from "react";

interface ProgressBarProps {
  active?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ active = false }) => {
  return (
    <div
      className={`flex flex-1 shrink h-0.5 basis-0 ${
        active ? "bg-zinc-800" : "bg-zinc-200"
      } min-w-60 w-[420px]`}
      role="progressbar"
      aria-valuenow={active ? 100 : 0}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};

export default ProgressBar;
