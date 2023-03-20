/* eslint-disable react/jsx-no-target-blank */
const Project = ({project}) => {
    return ( 
        <div className="project">
            <img src={project.src} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
                <a href={project.liveLink} target="_blank" >Live</a>
                <a href={project.githubLink} target="_blank">Github</a>
            </div>
        </div>
     );
}
 
export default Project;