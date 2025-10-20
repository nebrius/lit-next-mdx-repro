import type { NextConfig } from "next";

import createLit from "@lit-labs/nextjs";
import createMdx from "@next/mdx";

const withLit = createLit({
  webpackModuleRulesTest: /.*\.(js|jsx|ts|tsx|mdx)$/,
});
const withMdx = createMdx();

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withLit(withMdx(nextConfig));
