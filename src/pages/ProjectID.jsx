import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { projectData } from "../utils/data";

const ProjectID = () => {
  const { id } = useParams();
  const data = projectData[id];

  return (
    <div className="w-full min-h-screen text-gray-900 py-16 bg-pastelGreen-primary">
      <div className="w-4/5 rounded-lg bg-pastelGreen-secondary mx-auto realisticshadow">
        <h1 className="text-center text-6xl py-5 font-sarina">{data.title}</h1>
        <a href={data.link.url}>
          <img className="w-full" src={data.imagePath} alt={data.title} />
        </a>
      </div>
      <NavBar />
    </div>
  );
};

export default ProjectID;
