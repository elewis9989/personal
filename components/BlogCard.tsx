interface IBlogCard {
  title: string;
  date: Date;
}
const BlogCard: React.FC<IBlogCard> = ({ title, date }) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div>
      <a className="text-slate-500 text-3xl font-semibold">{title}</a>
      <p className="py-2">
        🗓 {new Date(date).toLocaleDateString('en-US', options)}
      </p>
    </div>
  );
};

export default BlogCard;
