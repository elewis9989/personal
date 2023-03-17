import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

const rootDirectory = path.join(process.cwd(), 'content', 'posts');

const prettyCodeOptions = {
  theme: 'material-theme-palenight',
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['highlighted', 'word'];
  },
};

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { data, content } = matter(fileContent);
  const readTime = readingTime(content).text;
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        [rehypePrettyCode, prettyCodeOptions],
      ],
    },
  });

  const post = {
    meta: {
      ...data,
      slug: realSlug,
      readTime,
    },
    source: mdxSource,
  };

  return post;
};

export const getPostMeta = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { data, content } = matter(fileContent);
  const readTime = readingTime(content).text;

  const { title, excerpt, date } = data;

  const meta = {
    title,
    excerpt,
    date,
    slug: realSlug,
    readTime,
  };

  return meta;
};

export const getAllSlugs = () => {
  const files = fs.readdirSync(rootDirectory);
  const slugs = files.map((file) => file.replace(/\.mdx$/, ''));
  return slugs;
};

export const getAllPostsMeta = () => {
  const files = fs.readdirSync(rootDirectory);
  const posts = files
    .map((file) => getPostMeta(file))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};
