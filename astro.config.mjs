import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://aprendiendo.work/",
  output: "server",
  adapter: cloudflare(),
});
