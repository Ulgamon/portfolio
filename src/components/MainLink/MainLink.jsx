import { useSpring, animated } from "@react-spring/web";
import { useRef } from "react";
import { Link } from "react-router-dom";

const MainLink = ({ to, title, className, textClassName }) => {
  const linkRef = useRef(null);

  const [{ xys }, api] = useSpring(() => ({
    xys: [0, 0, 1],
  }));

  const handleMouseLeave = () =>
    api.start({
      xys: [0, 0, 1],
    });

  const handleMouseMove = (e) => {
    const rect = linkRef.current.getBoundingClientRect();
    api.start({
      xys: calc(e.clientX, e.clientY, rect),
    });
  };

  return (
    <div className="w-full h-48 me-5 mx-auto flex justify-stretch items-center overflow-hidden">
      <animated.div
        ref={linkRef}
        style={{
          transform: xys.to(trans),
          clipPath:
            "polygon(0 40px,40px 0,100% 0,100% calc(100% - 40px),calc(100% - 40px) 100%,0 100%)",
        }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={
          "text-7xl w-full my-2 me-4 ms-32 p-2 py-4 px-10 ease-out transition-shadow rounded-sm delay-500 hover:shadow-md will-change-transform " +
          className
        }
      >
        <h2 className="text-black text-center font-sarina">
          <Link to={to}>{title}</Link>
        </h2>
      </animated.div>
    </div>
  );
};

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.2,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default MainLink;
