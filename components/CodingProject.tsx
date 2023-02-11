interface ICodingProject {
  title: string;
  description: string;
  url: string;
}
const CodingProject: React.FC<ICodingProject> = ({
  title,
  description,
  url,
}) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        className="text-slate-500 text-3xl font-semibold hover:text-slate-400"
        rel="noreferrer"
      >
        {title}
      </a>
      <h4 className="py-3 text-lg">{description}</h4>
    </div>
  );
};

export default CodingProject;
