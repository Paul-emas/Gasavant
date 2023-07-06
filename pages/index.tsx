import { HomepageTemplate } from "components/templates";
import { DefaultSeo, NextSeo } from "next-seo";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <NextSeo {...DefaultSeo} />
      <HomepageTemplate />
    </div>
  );
}
