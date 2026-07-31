import path from 'node:path';
import type { NextConfig } from 'next';

const cwd = process.cwd();
const turbopackRoot = cwd.endsWith(`${path.sep}web`)
  ? cwd
  : path.join(cwd, 'web');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: turbopackRoot,
  },
};

export default nextConfig;
