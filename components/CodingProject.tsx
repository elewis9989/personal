interface ICodingProject {
  title: string;
  description: string;
  url: string;
  tags: string[];
}
const CodingProject: React.FC<ICodingProject> = ({
  title,
  description,
  url,
  tags,
}) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        className="text-sky-800 text-3xl md:text-5xl font-semibold hover:text-slate-400"
        rel="noreferrer"
      >
        {title}
      </a>
      <h4 className="py-3 text-xl md:text-2xl">{description}</h4>
      <div className="">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-yellow-200 w-fit px-2 py-0.5 rounded leading-4 mr-1 mb-1 inline-flex font-light"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CodingProject;
