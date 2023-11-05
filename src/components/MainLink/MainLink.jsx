import { Link } from "react-router-dom";

const MainLink = ({ to, title, className }) => {
  return (
    <div
      style={{
        clipPath:
          "polygon(0 40px,40px 0,100% 0,100% calc(100% - 40px),calc(100% - 40px) 100%,0 100%)",
      }}
      className={
        "text-7xl w-full my-2 me-4 p-2 py-4 px-10 ease-in-out transition-transform duration-500 hover:scale-110 rounded-full hover:shadow-md will-change-transform " +
        className
      }
    >
      <h2 className="text-white text-center font-sarina">
        <Link to={to}>{title}</Link>
      </h2>
    </div>
  );
};

export default MainLink;
