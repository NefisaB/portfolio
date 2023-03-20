import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <main>
            <div className="basic-info">
                <h1>Nefisa Brcaninovic</h1>
                <p>Hi and welcome to my portfolio.<br/><br/>
                    My name is Nefisa and I am software developer in making.<br/> <br/>
                    I have tried Java, Android and even Python Programming, but finally decided for JavaScript, and everything 
                    that goes with it.<br/><br/>
                    You can find some of my nicer projects <Link to={"/projects"} >HERE</Link>, and everything else I have done in last 
                    6 months, at my <a href="https://github.com/NefisaB" >GITHUB PAGE</a>.
                    </p>
                </div>
            <div className="icons">
                <img src="https://github.com/NefisaB/portfolio/public/icons/html5.svg" alt="html" className="icon"/>
                <img src="https://github.com/NefisaB/portfolio/public/icons/css3-alt.svg" alt="css" className="icon"/>
                <img src="https://github.com/NefisaB/portfolio/public/icons/js.svg" alt="javascript" className="icon" />
                <img src="https://github.com/NefisaB/portfolio/public/icons/react.svg" alt="react" className="icon"/>
            </div>
        </main>
     );
}
 
export default Home;