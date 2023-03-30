import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { Button, MobileDropdown, NavTab, PopoverMenu } from "components/atoms";
import { MenuIcon, TimesIcon } from "icons";

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
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openNavDropdown, setOpenNavDowndown] = useState<boolean>(false);

  return (
    <nav
      className={`${navbarThemeColors[theme]} flex h-14 w-full items-center md:h-[120px]`}
    >
      <div className="h-12 w-full md:h-14">
        <div className="container mx-auto flex h-12 items-center justify-between px-5 md:h-14 md:px-8 2xl:px-40">
          <div>
            <Link href="/">
              <Image
                src={`/assets/images/logo-${logoTheme}.png`}
                width={203.51}
                height={57.87}
                placeholder="blur"
                blurDataURL="`/assets/images/logo-${theme}.png`"
                alt="Gasavant logo"
                className="hidden md:block"
              />
              <Image
                src={`/assets/images/logo-${logoTheme}.png`}
                width={116}
                height={30}
                placeholder="blur"
                blurDataURL={`/assets/images/logo-${theme}.png`}
                alt="Gasavant logo"
                className="block md:hidden"
              />
            </Link>
          </div>
          <div
            className={`${
              openNav ? "-translate-x-0" : "-translate-x-full"
            } transition-easeInOutQuint absolute left-0 bottom-0 top-14 z-50 block w-full bg-white px-6 py-10 duration-200 md:hidden`}
          >
            <div className="relative h-full space-y-10">
              {tabs.map(({ label, link, type }) => (
                <div key={label}>
                  {type === "dropdown" ? (
                    <MobileDropdown
                      label={label}
                      open={openNavDropdown}
                      setOpen={setOpenNavDowndown}
                    />
                  ) : (
                    <Link
                      href={link}
                      className="font-switz font-semibold text-neutral-900 active:text-primary-500"
                    >
                      {label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="absolute bottom-0 w-full">
                <Button label="Contact us" className="w-full" />
              </div>
            </div>
          </div>
          <div className="hidden items-center md:flex">
            {tabs.map(({ label, link, type }) => (
              <Fragment key={label}>
                {type === "dropdown" ? (
                  <PopoverMenu link={link} label={label} theme={optionTheme} />
                ) : (
                  <Link href={link}>
                    <NavTab label={label} theme={optionTheme} />
                  </Link>
                )}
              </Fragment>
            ))}
          </div>
          <div className="hidden md:block">
            <Button variant="primary" label="Contact us" />
          </div>
          <div className="block md:hidden">
            <button type="button" onClick={() => setOpenNav(!openNav)}>
              {!openNav ? (
                <>
                  {theme === "light" || theme === "transparent" ? (
                    <MenuIcon theme="dark" />
                  ) : (
                    <MenuIcon theme="light" />
                  )}
                </>
              ) : (
                <>
                  {theme === "light" || theme === "transparent" ? (
                    <TimesIcon theme="dark" />
                  ) : (
                    <TimesIcon theme="light" />
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
