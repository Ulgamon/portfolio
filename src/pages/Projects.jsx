import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ProjectList from "../components/Project/ProjectList";

const Projects = () => {
  return (
    <div className="w-full min-h-screen text-gray-900 bg-pastelGreen-primary flex justify-center items-center">
      <NavBar />
      <div className="w-4/5 rounded-lg bg-pastelGreen-secondary mx-auto realisticshadow">
        <h1 className="text-center text-6xl my-5 font-sarina">My Projects</h1>
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;
