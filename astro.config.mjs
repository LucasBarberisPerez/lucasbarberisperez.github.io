import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://lucasbarberisperez.github.io",
  integrations: [react()],
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    
  },
  build:{}
});
