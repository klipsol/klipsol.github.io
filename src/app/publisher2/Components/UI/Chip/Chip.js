import { twMerge } from "tailwind-merge";

export const Chip = ({ className, icon = "", label = "" }) => (
  <div
    className={twMerge(
      "px-4 py-2 rounded-3xl flex items-center gap-x-3 bg-[#FFDF74] text-[#000707] text-xs",
      className
    )}
  >
    <span>
      <img className="size-8" src={icon} alt="label" />
    </span>
    <span>{label}</span>
  </div>
);
