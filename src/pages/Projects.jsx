import { Link } from "react-router-dom";
import ProjectList from "../components/Project/ProjectList";

const Projects = () => {
  return (
    <div className="w-full min-h-screen text-gray-800 bg-pastelGreen-primary py-16 px-1 flex justify-center items-center">
      <div className=" w-full lg:w-4/5 max-w-[1240px] rounded-lg bg-pastelGreen-secondary mx-auto realisticshadow">
        <h1 className="text-center text-3xl lg:text-6xl my-5 font-sarina">My Projects</h1>
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;
