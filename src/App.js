import "./style.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";

function App({ root }) {

  const [theme, setTheme] = useState("light");

    const handleButtonClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

  return (
    <BrowserRouter>
      <div className={`App ${theme}`} >
      <Navbar theme={theme} handleButtonClick={handleButtonClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
