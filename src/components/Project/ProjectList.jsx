import { projectData } from "../../utils/data";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <ul className="w-full grid-cols-1 lg:grid-cols-2 grid gap-3 pb-3 px-2">
      {projectData.map((el) => (
        <li className="w-full">
          <ProjectCard data={el} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
