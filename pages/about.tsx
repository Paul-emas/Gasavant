import { AboutTemplate } from "components/templates";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { DefaultSEOProps } from "utils/data";

export default function AboutPage() {
  return (
    <>
      <NextSeo
        title="About us - We are passionate about building gas facilities"
        description="At Gasavant, we manage and enforce the highest quality and
        safety standards with all our partners and service
        providers."
        {...DefaultSEOProps}
      />
      <AboutTemplate />
    </>
  );
}
