import { Routes, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectID from "./pages/ProjectID";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translateX(100%)", display: "hidden" },
    enter: { opacity: 1, transform: "translateX(0)", display: "block" },
    leave: { opacity: 0, transform: "translateX(-50%)", display: "hidden" },
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
      <NavBar />
    </>
  );
}

export default App;
