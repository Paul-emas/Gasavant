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
        text: "Value proposition",
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
        text: "Our projects",
        slug: "/project",
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
        iconUrl: "/assets/images/socials/facebook.png",
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
    <footer className="bg-neutral-900 pt-[113px] pb-[108px]">
      <div className="container mx-auto px-20 2xl:px-40">
        <div className="grid grid-cols-6">
          <div className="col-span-2">
            <Image
              src="/assets/images/logo-dark.png"
              width={203.51}
              height={57.87}
              alt="Gasavant logo"
              placeholder="blur"
              blurDataURL="/assets/images/logo-dark.png"
            />
            <div className="mt-8 max-w-[300px] font-switz text-base text-primary-50">
              We engineer end‑to‑end solutions to bridge infrastructure gaps
              that hamper the anticipated growth in the Natural Gas and LPG
              value chain in Nigeria.
            </div>
          </div>
          {footerData.map(({ title, links, icons }) => (
            <div key={title} className="col-span-1">
              <div className="mb-8 font-switz font-semibold text-neutral-80">
                {title}
              </div>
              {links && links.length > 0
                ? links.map((link) => (
                    <div key={link.text} className="mb-7 last:mb-0">
                      <Link
                        href={link.slug}
                        className="font-switz text-base text-primary-50 hover:text-primary-500"
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
                        className="flex items-center space-x-2 font-switz text-base text-primary-50 hover:text-primary-500"
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
        <div className="mt-[185px] h-1 border-b border-neutral-400"></div>
        <div className="mt-12 flex justify-between font-switz text-base text-neutral-0">
          <div>8, Water Corporation, Dr. Oniru, Lagos, Nigeria.</div>
          <div>© Gasavant Africa 2023. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
