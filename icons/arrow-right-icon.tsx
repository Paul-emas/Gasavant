import React from "react";
import iconColorsShades from "./iconColorShades.json";
import { IconProps } from "./icon.interface";

const ArrowRightIcon: React.FC<IconProps> = ({ className = "", theme }) => {
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
        d="M14.4311 18.8189C14.2411 18.8189 14.0511 18.7489 13.9011 18.5989C13.6111 18.3089 13.6111 17.8289 13.9011 17.5389L19.4411 11.9989L13.9011 6.4589C13.6111 6.1689 13.6111 5.6889 13.9011 5.3989C14.1911 5.1089 14.6711 5.1089 14.9611 5.3989L21.0311 11.4689C21.3211 11.7589 21.3211 12.2389 21.0311 12.5289L14.9611 18.5989C14.8111 18.7489 14.6211 18.8189 14.4311 18.8189Z"
        fill={iconColorsShades[theme]}
      />
      <path
        d="M20.331 12.7488H3.50098C3.09098 12.7488 2.75098 12.4088 2.75098 11.9988C2.75098 11.5888 3.09098 11.2488 3.50098 11.2488H20.331C20.741 11.2488 21.081 11.5888 21.081 11.9988C21.081 12.4088 20.741 12.7488 20.331 12.7488Z"
        fill={iconColorsShades[theme]}
      />
    </svg>
  );
};

export default ArrowRightIcon;
