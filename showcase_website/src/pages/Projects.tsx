import ProjectDiv from "../components/ProjectDiv"

import { projects } from "../data/projects"

import "../styles/pages/projects.css";

export default function Projects() {

    return (
        <>
            <div className="head"></div>
            {projects.map((project, index) => (
                <ProjectDiv key={index} project={project}/>
            ))}
        </>
    );
}