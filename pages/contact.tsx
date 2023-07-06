import { ContactTemplate } from "components/templates";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { DefaultSEOProps } from "utils/data";

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Contact us"
        description="Connect with us, let’s work together"
        {...DefaultSEOProps}
      />
      <ContactTemplate />
    </>
  );
}
