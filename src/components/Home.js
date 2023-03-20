import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <main>
            <h1>Nefisa Brcaninovic</h1>
            <p className="basic-info">
                Hi and welcome to my portfolio.<br/>
                As this heading above says my name is Nefisa and I am software developer in making.<br/> 
                I have tried Java, Android and even Python Programming, but finally settled with JavaScript, and everything 
                that goes with it.<br/>
                You can find some of my nicer projects <Link to={"/projects"} >HERE</Link>, and everything else I have done in last 
                6 months, at my <a href="https://github.com/NefisaB" >GITHUB PAGE</a>.
            </p>
        </main>
     );
}
 
export default Home;