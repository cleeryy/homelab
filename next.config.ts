import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();

const config: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['fumadocs-ui', 'fumadocs-mdx'],
  turbopack: {
    root: __dirname,
  },
};

export default withMDX(config);
