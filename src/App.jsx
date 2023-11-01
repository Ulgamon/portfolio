import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { useTransition, animated } from "@react-spring/web";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <p className="text-white w-full h-screen bg-gray-900 text-6xl">
              Toja
            </p>
          }
        />
        <Route
          path="/toja"
          element={
            <p className="text-white w-full h-screen bg-blue-900 text-6xl">
              Nicija
            </p>
          }
        />
      </Routes>
    </>
  );
}

export default App;
