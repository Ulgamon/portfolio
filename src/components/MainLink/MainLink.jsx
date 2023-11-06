import { Link } from "react-router-dom";

const MainLink = ({ to, title, className }) => {
  return (
    <Link to={to}>
      <div
        style={{
          clipPath:
            "polygon(0 40px,40px 0,100% 0,100% calc(100% - 40px),calc(100% - 40px) 100%,0 100%)",
        }}
        className={
          " text-4xl md:text-7xl w-full my-2 p-2 py-4 px-10 ease-in-out transition-transform duration-500 hover:scale-110 rounded-full hover:shadow-md will-change-transform " +
          className
        }
      >
        <h2 className="text-white text-center font-sarina">{title}</h2>
      </div>
    </Link>
  );
};

export default MainLink;
