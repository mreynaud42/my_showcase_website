import ButtonCTA from "./ButtonCTA"
import ComputerChip from "./icon/ComputerChip"

import type { Project } from "../data/projects"

import "../styles/components/projectDiv.css";
import "../styles/components/projectDivFooter.css";

type ProjectDivProps = {
    project: Project,
}

function ProjectDivFront({ project }: ProjectDivProps) {

    let img: string;
    if (project.shortDescription?.imgs !== undefined)
        img = project.shortDescription.imgs[0];
    else
        img = "public/icon/code-computer.svg"

    return (
        <div className="project-front">
            <figure>
                <img src={img} alt="" />
                <figcaption>
                    <span>
                        <h1>{project.title}</h1>
                    </span>
                    <span>
                        <ComputerChip/>
                    </span>
                </figcaption>
            </figure>
        </div>
    );
}

function ProjectDivBack({ project }: ProjectDivProps) {
    return (
        <div className="project-back">
            <div className="title">
                <h1>{project.title}</h1>
            </div>
            <div className="content">
                <div className="description">
                    {project.shortDescription.description.map((p, index) => (
                        <p key={index}>{p}</p>
                    ))}
                </div>
                <div className="button">
                    <ButtonCTA href={`/projects/${project.id}`} cta="See my project"/>
                </div>
            </div>
        </div>
    );
}


export default function ProjectDiv({ project }: ProjectDivProps) {
    return (
        <article id={`project${project.id}`} className="project">
            <div className="card">
                <ProjectDivFront project={project}/>
                <ProjectDivBack project={project}/>
            </div>
        </article>
    );
}