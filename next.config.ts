import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't let `next dev` write AGENTS.md / CLAUDE.md into the project.
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep the old Wix URLs working once the domain moves over.
  async redirects() {
    return [
      { source: "/book-online", destination: "/pricing", permanent: true },
      { source: "/service-page/:slug*", destination: "/pricing", permanent: true },
      { source: "/get-a-quote", destination: "/quote", permanent: true },
      { source: "/terms-conditions-sections", destination: "/terms-conditions", permanent: true },
    ];
  },
};

export default nextConfig;
