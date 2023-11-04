import { projectData } from "../../utils/data";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <ul className="w-full grid gap-3 pb-3 px-2 grid-cols-3">
      {projectData.map((el) => (
        <li className="w-full">
          <ProjectCard data={el} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
