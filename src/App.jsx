import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    // browserRouter is the parent component that wraps the entire application used to manage the routing of the application
    <BrowserRouter>
      {/* NavBar component is rendered at the top of every page */}
      <NavBar />
      {/* Routes component is used to define the different routes in the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* Footer component is rendered at the bottom of every page */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
