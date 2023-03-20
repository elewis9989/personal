import Link from 'next/link';
import readingTime from 'reading-time';
import { Post } from '../.contentlayer/generated';

interface IBlogCard {
  post: Post;
}
const BlogCard: React.FC<IBlogCard> = ({ post }) => {
  const { url, title, excerpt, date } = post;

  return (
    <div>
      <Link
        href={url}
        className="text-sky-800 text-3xl md:text-5xl font-semibold hover:text-sky-600"
      >
        {title}
      </Link>
      <p className="text-xl md:text-2xl">{excerpt}</p>
      <div className="flex items-center py-2 text-lg md:text-xl">
        <p className="mr-6">
          🗓{' '}
          {new Date(date).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <p>{readingTime(post.body.raw).text} min</p>
      </div>
    </div>
  );
};

export default BlogCard;
