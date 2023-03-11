import React, { ButtonHTMLAttributes } from "react";

export interface NavTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
  iconType?: "chevron-down";
  iconPosition?: "left" | "right";
  theme: "light" | "dark";
}

const NavTab: React.FC<NavTabProps> = (
  {
    className = "",
    label,
    iconPosition = "right",
    iconType = "chevron-down",
    theme = "light",
  },
  ...props
) => {
  const themeStyles =
    theme === "light"
      ? "text-neutral-900 hover:bg-primary-50 focus:text-primary-500 active:text-primary-700"
      : "text-neutral-10 hover:bg-neutral-600 focus:text-primary-100 active:text-primary-200";
  1;

  return (
    <button
      type="button"
      className={`${className} ${themeStyles} px-5 py-4 font-switz`}
      {...props}
    >
      {iconPosition === "left" ? <span></span> : null}
      <span>{label}</span>
      {iconPosition === "right" ? <span></span> : null}
    </button>
  );
};

export default NavTab;
