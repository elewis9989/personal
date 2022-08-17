import type { NextApiResponse } from 'next';
import { getPosts } from '../utils/helpers';
import { Post } from './blog';

const createSitemap = (slugs: any[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://aroze.xyz/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const posts = await getPosts();

  const allPages = [
    ...posts.map((post: Post) => `post/${post.slug}`),
    ...['', 'blog', 'coding', 'resume'],
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
