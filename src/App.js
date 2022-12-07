import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Porfolio from "./pages/Porfolio";

const App = () => {
  const [active, setActive] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);
  return (
    <div className="app">
      <Navbar active={active} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/portfolio" element={<Porfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
