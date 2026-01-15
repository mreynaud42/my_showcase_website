import ComingSoon from "../components/ComingSoon"
import ProjectDiv from "../components/ProjectDiv"

import { projects } from "../data/projects"

import "../styles/pages/projects.css";

export default function Projects() {

    return (
        <>
            <div className="head"><h1 className="namepage">Projects</h1></div>
            {projects.map((project, index) => (
                <ProjectDiv key={index} project={project}/>
            ))}
            <ComingSoon/>
        </>
    );
}