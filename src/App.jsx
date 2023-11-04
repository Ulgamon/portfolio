import { Routes, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectID from "./pages/ProjectID";

function App() {
  let location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(-50%)" },
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
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectID />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </animated.div>
      ))}
    </>
  );
}

export default App;
