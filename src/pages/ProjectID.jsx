import { useParams } from "react-router-dom";
import { projectData } from "../utils/data";
import ProjectMain from "../components/Project/ProjectMain";

const ProjectID = () => {
  const { id } = useParams();
  const data = projectData[id];

  return (
    <div className="w-full min-h-screen text-gray-900 py-16 bg-pastelGreen-primary">
      <div className="w-4/5 rounded-lg bg-pastelGreen-secondary mx-auto realisticshadow">
        <h1 className="text-center text-6xl py-5 font-sarina">{data.title}</h1>
        <a target="_blank" href={data.link.url}>
          <img className="w-full" src={data.imagePath} alt={data.title} />
        </a>
        <ProjectMain project={data} />
      </div>
    </div>
  );
};

export default ProjectID;
