import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import lottie from "astro-integration-lottie";

import node from "@astrojs/node";
import partytown from "@astrojs/partytown";

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
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});