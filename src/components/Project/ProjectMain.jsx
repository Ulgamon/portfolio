import StackItem from "./StackItem";

const ProjectMain = ({ project }) => {
  return (
    <div className="w-full p-1 sm:p-5">
      <h4 className="text-md sm:text-xl text-ellipsis font-gotham">
        {" "}
        <a
          className="hover:underline font-playfair-reg text-xl text-gray-800"
          target="_blank"
          href={project.link.url}
        >
          CLICK HERE
        </a>{" "}
        to visit website.
      </h4>
      {project.githubLink && (
        <h4 className="text-md sm:text-xl text-ellipsis font-gotham">
          <a
            className="hover:underline font-playfair-reg text-xl text-gray-800"
            target="_blank"
            href={project.githubLink.url}
          >
            CLICK HERE
          </a>{" "}
          to see Github repo.
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
        <p className="text-md sm:text-lg font-gotham">{project.longDescription}</p>
      </div>
    </div>
  );
};

export default ProjectMain;
