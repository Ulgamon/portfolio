import { Link } from "react-router-dom";

const MainLink = ({ to, title, className }) => {
  return (
    <Link to={to}>
      <div
        style={{
          clipPath:
            "polygon(0 25px,25px 0,100% 0,100% calc(100% - 25px),calc(100% - 25px) 100%,0 100%)",
        }}
        className={
          " text-2xl md:text-4xl w-full my-2 p-2 py-4 ease-in-out transition-transform duration-500 hover:scale-110 rounded-full will-change-transform " +
          className
        }
      >
        <h2 className="text-white text-center font-sarina">{title}</h2>
      </div>
    </Link>
  );
};

export default MainLink;
