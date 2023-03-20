import "./style.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App({ root }) {

  const [theme, setTheme] = useState("light");

    const handleButtonClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

  return (
    <div className={`App ${theme}`} >
      <Navbar theme={theme} handleButtonClick={handleButtonClick} />
      <Home />
    </div>
  );
}

export default App;
