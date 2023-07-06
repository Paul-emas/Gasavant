import { HomepageTemplate } from "components/templates";
import { NextSeo } from "next-seo";
import { DefaultSEOProps } from "utils/data";

export default function Home() {
  return (
    <div>
      <NextSeo {...DefaultSEOProps} />
      <HomepageTemplate />
    </div>
  );
}
