import Image from 'next/image';
import Link from 'next/link';
import readingTime from 'reading-time';
import { Post } from '../.contentlayer/generated';

interface IBlogCard {
  post: Post;
}
const BlogCard: React.FC<IBlogCard> = ({ post }) => {
  const { url, title, excerpt, date } = post;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg md:hover:bg-gray-100 transition duration-300 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-105">
      <Link href={url}>
        {post.coverImage ? (
          <div className="">
            <Image
              alt="Cover image"
              src={post.coverImage}
              width={1640}
              height={920}
              className=""
            />
          </div>
        ) : null}
        <div className="p-4">
          <div className="h-20">
            <h1 className="text-sky-800 text-xl md:text-2xl font-semibold">
              {title}
            </h1>
            <p className="text-lg md:text-xl truncate">{excerpt}</p>
          </div>
          <div className="flex items-center py-2 text-base md:text-lg">
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
      </Link>
    </div>
  );
};

export default BlogCard;
