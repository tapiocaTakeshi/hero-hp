import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import lottie from "astro-integration-lottie";

import node from "@astrojs/node";
import partytown from "@astrojs/partytown";

// Vercel sets VERCEL=1 and Cloudflare Workers Builds sets WORKERS_CI=1 during builds.
// The Node standalone server can't run on either, and every page is static, so emit
// plain HTML there instead (served as static assets; see wrangler.jsonc).
const isStatic = !!(process.env.VERCEL || process.env.WORKERS_CI || process.env.CF_PAGES);

export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), tailwind(),lottie(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: isStatic ? 'static' : 'server',
  adapter: isStatic ? undefined : node({
    mode: "standalone"
  }),
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '8080')
  }
});