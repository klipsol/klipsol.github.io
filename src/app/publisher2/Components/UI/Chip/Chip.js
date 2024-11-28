import { twMerge } from "tailwind-merge";

export const Chip = ({ className, icon = "", label = "" }) => (
  <div
    className={twMerge(
      "px-4 lg:py-2 sm:py-1.5 rounded-3xl flex items-center gap-x-3 bg-[#FFDF74] text-[#000707] lg:text-xs 2xl:rounded-[35px] sm:text-[10px] font-medium 2xl:px-6",
      className
    )}
  >
    <span>
      <img className="lg:size-8 sm:size-6" src={icon} alt="label" />
    </span>
    <span>{label}</span>
  </div>
);
