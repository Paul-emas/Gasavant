import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerData = [
  {
    title: "Company",
    links: [
      {
        text: "About us",
        slug: "/about",
      },
      {
        text: "Our mission",
        slug: "/about",
      },
      {
        text: "Our values",
        slug: "/about",
      },
      {
        text: "Our team",
        slug: "/team",
      },
    ],
  },
  {
    title: "Our services",
    links: [
      {
        text: "Engineering design",
        slug: "/services",
      },
      {
        text: "Construction",
        slug: "/services",
      },
      {
        text: "Maintenance",
        slug: "/services",
      },
      {
        text: "LPG",
        slug: "/services",
      },
      {
        text: "Procurement",
        slug: "/services",
      },
      {
        text: "Storage",
        slug: "/serivces",
      },
    ],
  },
  {
    title: "Contact us",
    links: [
      {
        text: "FAQs",
        slug: "/faqs",
      },
      {
        text: "connect@gasavantafrica.com",
        slug: "#",
      },
      {
        text: "+234 818 842 0514",
        slug: "/about",
      },
    ],
  },
  {
    title: "Follow us",
    icons: [
      {
        text: "Linkedin",
        url: "/about",
        iconUrl: "/assets/images/socials/linkedin.png",
      },
      {
        text: "Facebook",
        url: "/about",
        iconUrl: "/assets/images/socials/facebook.png",
      },
      {
        text: "Instagram",
        url: "/about",
        iconUrl: "/assets/images/socials/instagram.png",
      },
      {
        text: "Twitter",
        url: "/about",
        iconUrl: "/assets/images/socials/twitter.png",
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 py-[33px] md:pb-[108px] md:pt-[113px]">
      <div className="container mx-auto px-5 md:px-20 2xl:px-40">
        <div className="grid md:grid-cols-6">
          <div className="col-span-2 flex flex-col items-center md:block">
            <Link href="/">
              <Image
                src="/assets/images/logo-dark.png"
                width={203.51}
                height={57.87}
                placeholder="blur"
                blurDataURL="/assets/images/logo-dark.png"
                alt="Gasavant logo"
                className="hidden md:block"
              />
              <Image
                src="/assets/images/logo-dark.png"
                width={116}
                height={30}
                placeholder="blur"
                blurDataURL="/assets/images/logo-dark.png"
                alt="Gasavant logo"
                className="block md:hidden"
              />
            </Link>
            <div className="mt-8 text-center font-switz text-base text-primary-50 md:max-w-[300px] md:text-left">
              We engineer end‑to‑end solutions to bridge infrastructure gaps
              that hamper the anticipated growth in the Natural Gas and LPG
              value chain in Nigeria.
            </div>
          </div>
          {footerData.map(({ title, links, icons }) => (
            <div key={title} className="col-span-1 mt-[58px] md:mt-0">
              <div className="mb-8 font-switz text-3.2xl font-semibold text-neutral-80 md:text-base">
                {title}
              </div>
              {links && links.length > 0
                ? links.map((link) => (
                    <div key={link.text} className="mb-4 last:mb-0 md:mb-7">
                      <Link
                        href={link.slug}
                        className="font-switz text-3.2xl text-primary-50 hover:text-primary-500 md:text-base"
                      >
                        {link.text}
                      </Link>
                    </div>
                  ))
                : null}
              {icons && icons.length > 0
                ? icons.map((icon) => (
                    <div key={icon.text} className="mb-7 last:mb-0">
                      <a
                        href={icon.url}
                        className="flex items-center space-x-2 font-switz text-3.2xl text-primary-50 hover:text-primary-500 md:text-base"
                      >
                        <Image
                          src={icon.iconUrl}
                          width={24}
                          height={24}
                          alt={`${icon.text} icon`}
                        />
                        <span>{icon.text}</span>
                      </a>
                    </div>
                  ))
                : null}
            </div>
          ))}
        </div>
        <div className="mt-[71px] h-1 border-b border-neutral-400 md:mt-[185px]"></div>
        <div className="mt-7 justify-between text-center font-switz text-3.2xl text-neutral-0 md:mt-12 md:flex md:text-left md:text-base">
          <div>8, Water Corporation, Dr. Oniru, Lagos, Nigeria.</div>
          <div className="mt-8 md:mt-0">
            © Gasavant Africa 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
