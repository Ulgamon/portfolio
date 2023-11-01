import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full text-white text-6xl bg-slate-900 min-h-screen">
      <p>Home</p>
      <Link to={"/about"}>Idi Do Toje</Link>
    </div>
  );
};

export default HomePage;
