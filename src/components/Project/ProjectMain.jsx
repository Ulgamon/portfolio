import StackItem from "./StackItem";

const ProjectMain = ({ project }) => {
  return (
    <div className="w-full p-5">
      <h4 className="text-sm sm:text-xl text-ellipsis font-gotham">
        Visit Website:{" "}
        <a
          className="hover:underline text-gray-800"
          target="_blank"
          href={project.link.url}
        >
          {project.link.url}
        </a>
        .
      </h4>
      {project.githubLink && (
        <h4 className="text-xl text-ellipsis font-gotham">
          See Code On Github:{" "}
          <a
            className="hover:underline text-gray-800"
            target="_blank"
            href={project.githubLink.url}
          >
            {project.githubLink.url}
          </a>
          .
        </h4>
      )}
      <h4 className="text-xl mt-5 font-playfair-reg">
        Technologies & Packages:
      </h4>
      <div className="w-fit flex flex-wrap bg-gray-900 rounded-lg">
        {project.stack.map((el) => (
          <StackItem key={el.title} item={el} />
        ))}
      </div>
      <div className=" xl:w-3/4 mx-auto my-16">
        <h4 className="text-xl my-3 font-playfair-reg">Description:</h4>
        <p className="text-lg font-gotham">{project.longDescription}</p>
      </div>
    </div>
  );
};

export default ProjectMain;
