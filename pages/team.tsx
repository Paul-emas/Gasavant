import { TeamTemplate } from "components/templates";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { DefaultSEOProps } from "utils/data";

export default function TeamPage() {
  return (
    <>
      <NextSeo
        title="Our Team — Our Executive management team"
        description="With over 35+ years combined experience our expert team of
        engineers are committed to delivering safe, reliable, and
        efficient solutions for storing propane, hydrogen, and other
        gases."
        {...DefaultSEOProps}
      />
      <TeamTemplate />
    </>
  );
}
