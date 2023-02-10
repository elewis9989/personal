// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../lib/helpers';
const { CONTENT_API_KEY, BLOG_URL } = process.env;

type Data = {
  posts: Post[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image,reading_time,published_at,meta_title,meta_description&formats=html`;
  const fetchResult = await fetch(url);
  const jsonResult = await fetchResult.json();

  console.log(jsonResult);

  res.status(200).json({ posts: jsonResult.posts });
}
