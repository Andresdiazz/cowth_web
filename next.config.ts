import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que Turbopack infiera una raíz fuera del proyecto por lockfiles vecinos.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
