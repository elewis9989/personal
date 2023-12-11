import rss from "@astrojs/rss";
import type { AstroConfig } from "astro";

export function GET(context: AstroConfig) {
  return rss({
    // `<title>` field in output xml
    title: "Roze",
    // `<description>` field in output xml
    description: "A humble Astronaut’s guide to the stars",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site as string,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: [],
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
