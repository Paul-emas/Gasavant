import { ArrowRightIcon, ArrowUpRightIcon } from "icons";
import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  label: string;
  size?: "small" | "medium" | "large" | "large-with-icon";
  variant?: "primary" | "secondary" | "inverted" | "dark" | "darker";
  isWithIcon?: boolean;
  iconType?: "arrow-right-up" | "arrow-right";
  iconPosition?: "left" | "right";
  iconColor?: "light" | "dark" | "secondary";
  onClick?: () => void;
}

export interface ButtonSizesInterface {
  small: string;
  medium: string;
  large: string;
  "large-with-icon": string;
}

export interface ButtonVariantsInterface {
  primary: string;
  secondary: string;
  inverted: string;
  dark: string;
  darker: string;
}

export interface IconVariantsInterface {
  "arrow-right-up": React.ReactNode;
  "arrow-right": React.ReactNode;
}

const Button: React.FC<ButtonProps> = (
  {
    className = "",
    label = "",
    size = "medium",
    variant = "primary",
    disabled = false,
    isWithIcon = false,
    iconPosition = "left",
    iconType = "arrow-right",
    iconColor = "light",
    onClick,
  },
  ...props
) => {
  const sizes: ButtonSizesInterface = {
    small: "btn-size-xsmall",
    medium: "btn-size-medium",
    large: "btn-size-large",
    "large-with-icon": "btn-size-large-icon",
  };

  const icons: IconVariantsInterface = {
    "arrow-right-up": <ArrowUpRightIcon theme={iconColor} />,
    "arrow-right": <ArrowRightIcon theme={iconColor} />,
  };

  const variants: ButtonVariantsInterface = {
    primary: !disabled
      ? "bg-primary-500 text-neutral-10 hover:bg-primary-300 hover:text-neutral-10 active:bg-primary-300 icon-primary"
      : "bg-neutral-30 text-neutral-100",
    secondary: !disabled
      ? "bg-primary-50 text-primary-500 hover:bg-primary-100"
      : "text-neutral-100 bg-neutral-0",
    dark: !disabled
      ? "bg-primary-200 text-neutral-900 hover:bg-primary-100 active:bg-primary-300 icon-dark"
      : "bg-neutral-700 text-neutral-100",
    darker: !disabled
      ? "bg-neutral-900 text-primary-50 hover:text-primary-100 hover:bg-neutral-800 active:text-primary-200 icon-darker"
      : "bg-neutral-900 text-neutral-100",
    inverted: !disabled ? "" : "",
  };

  return (
    <button
      onClick={onClick}
      className={`${sizes[size]} ${variants[variant]} ${className} flex items-center justify-center gap-x-2 border-none font-switz font-semibold outline-none`}
      {...props}
    >
      {isWithIcon && iconPosition === "left" ? (
        <span>{icons[iconType]}</span>
      ) : null}
      <span>{label}</span>
      {isWithIcon && iconPosition === "right" ? (
        <span>{icons[iconType]}</span>
      ) : null}
    </button>
  );
};

export default Button;
