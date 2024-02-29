import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import auth from "auth-astro";
import Google from '@auth/core/providers/google';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [auth()],
});
