import { ServicesTemplate } from "components/templates";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { DefaultSEOProps } from "utils/data";

export default function ServicesPage() {
  return (
    <>
      <NextSeo
        title="Our services — with over 35 years of experience"
        description="With strong focus on safety and quality assurance, ensuring all projects meet industry standards and regulations."
        {...DefaultSEOProps}
      />
      <ServicesTemplate />
    </>
  );
}
