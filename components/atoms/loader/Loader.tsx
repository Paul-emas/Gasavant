import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline({});
    tl.fromTo(".gif", { autoAlpha: 1 }, { delay: 2.6, autoAlpha: 0 });
    tl.fromTo(".blue-bg", { height: "100%" }, { height: 0 });
    tl.fromTo(".loader", { height: "100%" }, { height: 0 });
  }, []);

  return (
    <div className="loader fixed inset-0 z-50 h-full w-full bg-neutral-30">
      <div className="blue-bg transition-easeInOutQuint absolute flex h-full w-full items-center justify-center overflow-hidden bg-primary-500">
        <Image
          src="/assets/images/loader.gif"
          width={600}
          height={200}
          alt="gasavant loader gif"
          className="gif object-contain"
        />
      </div>
    </div>
  );
};

export default Loader;
