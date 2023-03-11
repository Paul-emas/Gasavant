import React from "react";
import iconColorsShades from "./iconColorShades.json";
import { IconProps } from "./icon.interface";

const ArrowUpRightIcon: React.FC<IconProps> = ({ className = "", theme }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5404 15.1026C18.406 15.237 18.2222 15.3218 18.0101 15.3218C17.5999 15.3218 17.2605 14.9824 17.2605 14.5723L17.2605 6.73757L9.42578 6.73757C9.01566 6.73757 8.67624 6.39816 8.67624 5.98804C8.67624 5.57792 9.01566 5.2385 9.42578 5.2385L18.0101 5.2385C18.4202 5.2385 18.7596 5.57791 18.7596 5.98804L18.7596 14.5723C18.7596 14.7844 18.6747 14.9683 18.5404 15.1026Z"
        fill={iconColorsShades[theme]}
      />
      <path
        d="M18.4201 6.63851L6.51946 18.5391C6.22954 18.829 5.74871 18.829 5.4588 18.5391C5.16888 18.2492 5.16888 17.7684 5.4588 17.4785L17.3594 5.57785C17.6493 5.28794 18.1301 5.28794 18.4201 5.57785C18.71 5.86777 18.71 6.3486 18.4201 6.63851Z"
        fill={iconColorsShades[theme]}
      />
    </svg>
  );
};

export default ArrowUpRightIcon;
