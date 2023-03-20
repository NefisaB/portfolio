const Navbar = ({theme, handleButtonClick}) => {

    return ( 
        <nav>
            <div className="nav-links">
                <a href="/" >Home</a>
                <a href="/" >Projects</a>
            </div>
            <button className={theme}
                onClick={handleButtonClick}>{theme}</button>
        </nav>
     );
}
 
export default Navbar;