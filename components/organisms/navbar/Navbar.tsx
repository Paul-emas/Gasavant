import { Button, NavTab } from "components/atoms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface NavbarProps {
  theme: "light" | "dark" | "transparent";
  logoTheme: "light" | "dark";
  optionTheme: "light" | "dark";
}

const tabs = [
  {
    label: "Home",
    link: "/",
    type: "single",
  },
  {
    label: "About us",
    link: "/about",
    type: "single",
  },
  {
    label: "Our services",
    link: "/services",
    type: "dropdown",
  },
  {
    label: "Our project",
    link: "/projects",
    type: "single",
  },
];

const navbarThemeColors = {
  light: "bg-neutral-0",
  dark: "bg-neutral-900",
  transparent: "",
};

const Navbar: React.FC<NavbarProps> = ({
  theme = "light",
  logoTheme = "light",
  optionTheme = "light",
}) => {
  return (
    <nav
      className={`${navbarThemeColors[theme]} flex h-[120px] w-full items-center`}
    >
      <div className="h-14 w-full">
        <div className="container mx-auto flex h-14 items-center justify-between px-8 2xl:px-40">
          <div>
            <Link href="/">
              <Image
                src={`/assets/images/logo-${logoTheme}.png`}
                width={203.51}
                height={57.87}
                placeholder="blur"
                blurDataURL="`/assets/images/logo-${theme}.png`"
                alt="Gasavant logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            {tabs.map(({ label, link }) => (
              <Link key={label} href={link}>
                <NavTab label={label} theme={optionTheme} />
              </Link>
            ))}
          </div>
          <div>
            <Button variant="primary" label="Contact us" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
