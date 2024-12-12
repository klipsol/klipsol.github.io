import React from "react";
import clsx from "clsx";

export default function Button({
  className = "",
  variant = "primary",
  onClick,
  disabled = false,
  label,
  children,
}) {
  const baseStyles =
    "px-4 py-1.5 rounded-md focus:outline-none rounded-4xl text-sm ";

  const variantStyles = {
    primary: "bg-secondaryBg text-white hover:bg-[#021E2C] rounded-3xl",
    secondary:
      "bg-[#F8F8FC] text-primaryTextColor hover:bg-[#E8E8EB]  rounded-3xl",
    tertiary: "bg-tertiaryBg text-primaryTextColor hover:bg-[#F7B801CF]",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className
      )}
      aria-label={label}
    >
      {children || label}
    </button>
  );
}
