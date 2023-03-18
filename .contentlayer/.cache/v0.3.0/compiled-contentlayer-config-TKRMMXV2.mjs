// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: true
    },
    date: {
      type: "string",
      description: "The date of the post",
      required: true
    },
    coverimage: {
      type: "string",
      description: "The cover image of the post",
      required: false
    },
    ogImage: {
      type: "string",
      description: "The og cover image of the post",
      required: false
    },
    tags: {
      type: "string[]",
      description: "The tags of the post",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    }
  }
}));
var prettyCodeOptions = {
  theme: "material-theme-palenight",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["highlighted", "word"];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypePrettyCode, prettyCodeOptions]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-TKRMMXV2.mjs.map
