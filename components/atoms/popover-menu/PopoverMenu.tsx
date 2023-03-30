import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import NavTab from "../nav-tab/NavTab";
import Link from "next/link";
import Image from "next/image";

export type PopoverMenuProps = {
  label: string;
  link: string;
  theme: "light" | "dark";
};

const options = [
  {
    title: "Engineering Design",
    caption: "Gas storage & distribution infrastructure",
    link: "/projects/design",
    imageUrl: "/assets/images/nav-icons/design.png",
    alt: "Engineering Design",
  },
  {
    title: "Construction",
    caption: "We build LPG gas storage tanks",
    link: "/projects/design",
    imageUrl: "/assets/images/nav-icons/tools.png",
    alt: "Construction",
  },
  {
    title: "Maintenance",
    caption: "Cleaning, Inspection & repair",
    link: "/projects/design",
    imageUrl: "/assets/images/nav-icons/maintenance.png",
    alt: "Maintenance",
  },
  {
    title: "Procurement",
    caption: "We provide ECPI",
    link: "/projects/design",
    imageUrl: "/assets/images/nav-icons/procurement.png",
    alt: "Procurement",
  },
  {
    title: "Storage",
    caption: "Comprehensive storage solutions",
    link: "/projects/design",
    imageUrl: "/assets/images/nav-icons/storage.png",
    alt: "Storage",
  },
  {
    title: "LPG",
    caption: "Liquified Petroleum Gas",
    link: "/projects/design",
    imageUrl: "/assets/images/nav-icons/lgp.png",
    alt: "LPG",
  },
];

const PopoverMenu: React.FC<PopoverMenuProps> = ({
  link = "",
  label = "",
  theme,
}) => {
  const themeStyles =
    theme === "light"
      ? "text-neutral-900 hover:bg-primary-50 focus:text-primary-500 active:text-primary-700"
      : "text-neutral-10 hover:bg-neutral-600 focus:text-primary-100 active:text-primary-200";
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            as="div"
            className={`
          ${open ? "" : themeStyles}`}
          >
            <NavTab label={label} theme={theme} iconType="chevron-down" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4">
              <div
                className={`${
                  theme === "light" ? "float-shadow" : ""
                } h-[536px] w-[388px] bg-neutral-0 px-6 pt-4 pb-10`}
              >
                {options.map(({ title, caption, imageUrl, link, alt }) => (
                  <Link key={title} href={link}>
                    <div className="group flex h-[80px] w-full items-center p-3 hover:bg-primary-50">
                      <div>
                        <div className="flex h-14 w-14 items-center justify-center bg-primary-50 duration-200 group-hover:bg-neutral-0">
                          <div>
                            <Image
                              src={imageUrl}
                              width={24}
                              height={24}
                              alt={alt}
                              priority
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 font-switz">
                        <div className="font-semibold leading-5 text-neutral-900">
                          {title}
                        </div>
                        <div className="text mt-1 text-3.2xl text-neutral-500">
                          {caption}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopoverMenu;
