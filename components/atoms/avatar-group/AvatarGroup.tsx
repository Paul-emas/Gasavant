import Image from "next/image";
import React from "react";

const AvatarGroup: React.FC<{ theme?: "light" | "dark" }> = ({
  theme = "light",
}) => {
  return (
    <div className="mt-[142px] flex items-center">
      <div className="flex items-center ml-5">
        <Image
          src="/assets/images/avatar-1.jpg"
          width={56}
          height={56}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/assets/images/avatar-1.jpg"
          alt="header avatar 1"
          className="rounded-full -ml-4"
        />
        <Image
          src="/assets/images/avatar-2.jpg"
          width={56}
          height={56}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/assets/images/avatar-2.jpg"
          alt="header avatar 2"
          className="rounded-full -ml-4"
        />
        <Image
          src="/assets/images/angle-up.jpg"
          width={56}
          height={56}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/assets/images/angle-up.jpg"
          alt="header arrow up image"
          className="rounded-full -ml-4"
        />
      </div>
      <div
        className={`${
          theme === "light" ? "text-neutral-20" : "text-neutral-900"
        } ml-4 font-switz`}
      >
        <div className="font-semibold">Senior staff</div>
        <div className="font-light">ready to assist you</div>
      </div>
    </div>
  );
};

export default AvatarGroup;
