import ProjectDiv from "../components/ProjectDiv"
import ThreeLaptop from "../components/ThreeCube";

import { projects } from "../data/projects"

import "../styles/pages/projects.css";

export default function Projects() {

    return (
        <div className="projects">
            <div className="head">
                <div className="three">
                    <ThreeLaptop />
                </div>
                <div className="text">
                    <h1>Explore my work</h1>
                    <p>from low-level C programming to full-stack architectures.</p>
                </div>
            </div>
            <section className="project">
                {projects.map((project, index) => (
                    <ProjectDiv key={index} project={project}/>
                ))}
            </section>
        </div>
    );
}