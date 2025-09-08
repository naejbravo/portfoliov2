import type { NextConfig } from "next";
import createMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';

const withMDX = createMDX({
  // options: {
  //   remarkPlugins:[remarkGfm],
  // }
})

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  }
};

export default withMDX(nextConfig);
