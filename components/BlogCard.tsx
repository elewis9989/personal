import Link from 'next/link';

interface IBlogCard {
  title: string;
  date: Date;
  length: number;
  slug: string;
}
const BlogCard: React.FC<IBlogCard> = ({ title, date, length, slug }) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div>
      <Link
        href={`/blog/${encodeURIComponent(slug)}`}
        className="text-slate-500 text-3xl font-semibold hover:text-slate-400"
      >
        {title}
      </Link>
      <div className="flex items-center py-2">
        <p className="mr-6">
          🗓 {new Date(date).toLocaleDateString('en-US', options)}
        </p>
        <p>{length} min</p>
      </div>
    </div>
  );
};

export default BlogCard;
