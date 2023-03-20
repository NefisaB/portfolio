import Project from "./Project";
import { data } from "../data";

const Projects = () => {

    const projectsList = data.map(item => {
        return (<Project key={item.title} project={item} />)
    })
    return ( 
        <div className="projects">
            {projectsList}
        </div>
     );
}
 
export default Projects;