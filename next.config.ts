import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que Turbopack infiera una raíz fuera del proyecto por lockfiles vecinos.
  turbopack: { root: import.meta.dirname },
  async redirects() {
    return [
      // cowth.co entra en español. Temporal (307) a propósito: si algún día el
      // idioma por defecto cambia, ningún navegador se queda con la ruta cacheada.
      { source: "/", destination: "/es", permanent: false },
    ];
  },
};

export default nextConfig;
