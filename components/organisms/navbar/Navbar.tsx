import { Button, NavTab } from "components/atoms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface NavbarProps {
  theme: "light" | "dark";
}

const tabs = [
  {
    label: "Home",
    type: "single",
  },
  {
    label: "About us",
    type: "single",
  },
  {
    label: "Our services",
    type: "dropdown",
  },
  {
    label: "Our products",
    type: "single",
  },
];
const Navbar: React.FC<NavbarProps> = ({ theme = "light" }) => {
  return (
    <nav
      className={`${
        theme === "light" ? "bg-neutral-0" : "bg-neutral-900"
      } h-[120px] flex items-center w-full`}
    >
      <div className="h-14 w-full">
        <div className="container px-20 2xl:px-40 mx-auto flex items-center justify-between h-14">
          <div>
            <Link href="/">
              <Image
                src={`/assets/images/logo-${theme}.png`}
                width={203.51}
                height={57.87}
                placeholder="blur"
                blurDataURL="`/assets/images/logo-${theme}.png`"
                alt="Gasavant logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            {tabs.map(({ label }) => (
              <NavTab key={label} label={label} theme={theme} />
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
