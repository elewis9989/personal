import Link from 'next/link';
import { type PostMeta } from '../lib/helpers';

interface IBlogCard {
  meta: PostMeta;
}
const BlogCard: React.FC<IBlogCard> = ({ meta }) => {
  const { slug, title, excerpt, date, readTime } = meta;

  return (
    <div>
      <Link
        href={`/blog/${encodeURIComponent(slug)}`}
        className="text-sky-800 text-3xl font-semibold hover:text-sky-600"
      >
        {title}
      </Link>
      <p>{excerpt}</p>
      <div className="flex items-center py-2">
        <p className="mr-6">
          🗓{' '}
          {new Date(date).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <p>{readTime} min</p>
      </div>
    </div>
  );
};

export default BlogCard;
