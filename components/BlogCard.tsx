import Link from 'next/link';
import BlogViewCount from './BlogViewCount';

interface IBlogCardProps {
  title: string;
  slug: string;
  reading_time: number;
  published_at: Date;
}

export default function BlogCard(post: IBlogCardProps) {
  const { title, slug, reading_time, published_at } = post;

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className='px-9'>
      <Link href='/post/[slug]' as={`/post/${slug}`}>
        <a className='header-1 font-bold'>{title}</a>
      </Link>
      <div className='md:flex'>
        <div className='flex pt-4'>
          <p className='italic px-3 tag'>
            {new Date(published_at).toLocaleDateString('en-US', options)}
          </p>
          <BlogViewCount className='italic px-3 tag' slug={slug} />
          <p className='pl-7 text-gray-pastel font-light tag'>
            {reading_time} min
          </p>
        </div>
      </div>
    </div>
  );
}
