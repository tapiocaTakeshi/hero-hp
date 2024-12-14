import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";

import lottie from "astro-integration-lottie";

import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), tailwind(),lottie()],
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});