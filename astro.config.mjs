import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ministry-transformation.github.io",
  output: "static",
  trailingSlash: "always",
  base: process.env.GITHUB_ACTIONS === "true" ? "/denis-visotskiy-boxing" : "",
});
