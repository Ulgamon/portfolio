import { Routes, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  let location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-50%)" },
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </animated.div>
      ))}
    </>
  );
}

export default App;
