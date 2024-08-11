import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Combine Nextra configuration with your existing Next.js config
const combinedConfig = withNextra({
  ...nextConfig,
  output: "export",
  images: {
    unoptimized: true,
  },
});

export default combinedConfig;
