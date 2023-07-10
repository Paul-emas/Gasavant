import { HomepageTemplate } from "components/templates";
import { NextSeo } from "next-seo";
import { DefaultSEOProps } from "utils/data";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Gasavantafrica - We build high-quality gas storage facilities"
        description="Providing engineering and gas storage infrastructure that meets all your gas infrastructure needs."
        {...DefaultSEOProps}
      />
      <HomepageTemplate />
    </div>
  );
}
