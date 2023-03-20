import { Link } from "react-router-dom";

const Navbar = ({theme, handleButtonClick}) => {

    return ( 
        <nav>
            <div className="nav-links">
                <Link to={"/"}>Home</Link>
                <Link to={"/projects"}>Projects</Link>
            </div>
            <button className={theme}
                onClick={handleButtonClick}>{theme !== "light" ? "light" : "dark"}</button>
        </nav>
     );
}
 
export default Navbar;