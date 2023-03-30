import React from "react";
import Link from "next/link";
import { options } from "../popover-menu/PopoverMenu";

export type MobileDropdownProp = {
  label: string;
  open: boolean;
  setOpen: (val: boolean) => void;
};

const MobileDropdown: React.FC<MobileDropdownProp> = ({
  label,
  open,
  setOpen,
}) => {
  return (
    <div className="font-switz font-semibold text-neutral-900">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between active:text-primary-500"
      >
        <div>{label}</div>
        <div className="rotate-90 text-2xl">&rsaquo;</div>
      </div>
      <div
        className={`${
          open ? "mt-6 h-auto overflow-auto" : "h-0 overflow-hidden"
        } w-full space-y-6 px-5 duration-200`}
      >
        {options.map((item) => (
          <div key={item.title}>
            <Link href={item.link} className="text-3.2xl">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileDropdown;
