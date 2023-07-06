import { FaqsTemplate } from "components/templates";
import { NextSeo } from "next-seo";
import { DefaultSEOProps } from "utils/data";

export default function FaqPage() {
  return (
    <>
      <NextSeo
        title="Frequently Asked Questions"
        description="Got questions? we’ve got answers"
        {...DefaultSEOProps}
      />
      <FaqsTemplate />
    </>
  );
}
