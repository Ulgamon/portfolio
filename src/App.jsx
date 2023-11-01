import { Routes, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

function App() {
  let location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
    exitBeforeEnter: true,
  });
  console.log(location);

  return (
    <>
      {transitions((styling, location) => (
        <animated.div key={location.pathname} style={styling}>
          <Routes location={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </animated.div>
      ))}
    </>
  );
}

export default App;
