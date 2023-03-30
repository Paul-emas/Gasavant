import React from "react";
import iconColorsShades from "./iconColorShades.json";
import { IconProps } from "./icon.interface";

const TimesIcon: React.FC<IconProps> = ({ className = "", theme }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0527 6.23014L6.23056 19.0522C5.79247 19.4903 5.10222 19.5267 4.70794 19.1324C4.31366 18.7381 4.34999 18.0478 4.78808 17.6098L17.6102 4.78765C18.0483 4.34956 18.7385 4.31323 19.1328 4.70751C19.5271 5.10179 19.4908 5.79205 19.0527 6.23014Z"
        fill={iconColorsShades[theme]}
      />
      <path
        d="M19.1328 19.2925C18.7385 19.6868 18.0483 19.6504 17.6102 19.2124L4.78808 6.39025C4.34999 5.95216 4.31366 5.2619 4.70794 4.86762C5.10222 4.47334 5.79247 4.50967 6.23056 4.94776L19.0527 17.7699C19.4908 18.208 19.5271 18.8982 19.1328 19.2925Z"
        fill={iconColorsShades[theme]}
      />
    </svg>
  );
};

export default TimesIcon;
