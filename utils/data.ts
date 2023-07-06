export const DefaultSEOProps = {
  canonical: process.env.NEXT_PUBLIC_BASE_URL ?? "http://GasavantAfrica.com/",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/favicon.ico",
    },
    {
      rel: "icon",
      href: "/assets/images/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      href: "/assets/images/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      href: "/assets/images/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
  openGraph: {
    url: "http://gasavantafrica.com/",
    title: "GasavantAfrica - We build high-quality gas storage facilities",
    description:
      "Providing engineering and gas storage infrastructure that meets all your gas infrastructure needs.",
    images: [
      {
        url: "/assets/images/seo/logo-800x600.jpg",
        width: 800,
        height: 600,
        alt: "GasavantAfrica Logo",
        type: "image/jpeg",
      },
      {
        url: "/assets/images/seo/logo-900x800.jpg",
        width: 900,
        height: 800,
        alt: "GasavantAfrica Logo",
        type: "image/jpeg",
      },
    ],
    siteName: "GasavantAfrica",
  },
  twitter: {
    handle: "@_GasavantAfrica",
    site: "@_GasavantAfrica",
    cardType: "summary_large_image",
  },
};
