import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();

const config: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['fumadocs-ui', 'fumadocs-mdx'],
};

export default withMDX(config);
