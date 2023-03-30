import React from "react";
import iconColorsShades from "./iconColorShades.json";
import { IconProps } from "./icon.interface";

const MenuIcon: React.FC<IconProps> = ({ className = "", theme }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="3.25"
        y1="9"
        x2="20.75"
        y2="9"
        stroke={iconColorsShades[theme]}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M20.75 15L10 15"
        stroke={iconColorsShades[theme]}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default MenuIcon;
