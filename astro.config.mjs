import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import lottie from "astro-integration-lottie";

import node from "@astrojs/node";
import partytown from "@astrojs/partytown";

// Vercel sets VERCEL=1 during builds. The Node standalone server can't run there,
// and every page is static, so emit plain HTML for Vercel instead.
const isVercel = !!process.env.VERCEL;

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
  output: isVercel ? 'static' : 'server',
  adapter: isVercel ? undefined : node({
    mode: "standalone"
  }),
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '8080')
  }
});