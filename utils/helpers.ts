const { CONTENT_API_KEY, BLOG_URL } = process.env;

export async function getPosts() {
  const res: any = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image,reading_time,published_at,meta_title,meta_description&formats=html`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export async function getPost(slug: string) {
  const res: any = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image,reading_time,published_at,meta_title,meta_description&formats=html`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}
