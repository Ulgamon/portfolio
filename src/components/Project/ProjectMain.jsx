import StackItem from "./StackItem";

const ProjectMain = ({ project }) => {
  return (
    <div className="w-full p-5">
      {project.githubLink && (
        <h4 className="text-xl font-playfair-reg">
          See On Github:{" "}
          <a
            className="hover:underline text-blue-950"
            target="_blank"
            href={project.githubLink.url}
          >
            {project.githubLink.title}
          </a>
        </h4>
      )}
      <h4 className="text-xl font-playfair-reg">Technologies & Packages:</h4>
      <div className="w-fit flex flex-wrap bg-gray-900 rounded-lg">
        {project.stack.map((el) => (
          <StackItem key={el.title} item={el} />
        ))}
      </div>
      <h4 className="text-xl font-playfair-reg">Description:</h4>
      <p className="text-md font-gotham">{project.longDescription}</p>
    </div>
  );
};

export default ProjectMain;
