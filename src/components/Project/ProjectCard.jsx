import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <div className="rounded-lg w-full bg-white shadow1">
      <Link to={"/projects/" + data.id}>
        <img className="w-full pt-2" src={data.imagePath} alt={data.title} />
        <h4 className="text-xl ps-2 font-playfair-reg">{data.title}</h4>
        <p className="font-gotham ps-2">{data.shortDescription}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
