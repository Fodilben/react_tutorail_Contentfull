import useContentfullHook from "../contenfulHook";

const Projects = () => {
  const { isLoading, projects } = useContentfullHook();
  console.log(projects);
  return (
    <div className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-Underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, url, img, title } = project;
          return (
            <a
              className="project"
              key={id}
              target="_blank"
              rel="norefferrer"
              href={url}
            >
              <img src={img} alt={title} className="img" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
