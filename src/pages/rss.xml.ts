import rss from "@astrojs/rss";
import type { AstroConfig } from "astro";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context: AstroConfig) {
  const posts = await getCollection("blog");
  return rss({
    // `<title>` field in output xml
    title: "Roze | Writings",
    // `<description>` field in output xml
    description: "A humble Astronaut’s guide to the stars",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site as string,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/writing/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
