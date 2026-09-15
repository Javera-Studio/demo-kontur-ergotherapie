import type { NextConfig } from "next";

// Statischer Export für Cloudflare Pages: next.config.js `headers()` wird bei
// `output: "export"` nicht unterstützt. Security-Header (CSP, X-Frame-Options,
// Referrer-Policy, Permissions-Policy) werden stattdessen über `public/_headers`
// ausgeliefert (Cloudflare-Pages-Konvention).
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Kein Node-Server zur Laufzeit auf Cloudflare Pages verfügbar ->
    // next/image liefert unoptimierte Assets aus (Resizing entfällt).
    unoptimized: true,
  },
};

export default nextConfig;
