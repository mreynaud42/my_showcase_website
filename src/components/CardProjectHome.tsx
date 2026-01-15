
import ButtonCTA from "./ButtonCTA"

import type { Project } from "../data/projects"

import "../styles/components/cardProjectHome.css";

type CardProjectHomeProps = {
    project: Project,
}

export default function CardProjectHome({ project }: CardProjectHomeProps) {

    return (
        <div className="card-project-home">
            <div className="text">
                <h3>{project.title}</h3>
                {project.shortDescription.description.map((p, index) => (
                    <p key={index}>{p}</p>
                ))}
                <div className="button">
                    <ButtonCTA href={`/projects/${project.id}`} cta="Learn more"/>
                </div>
            </div>
            <div className="img">
                {project.shortDescription.imgs && (
                    <img src={project.shortDescription.imgs[0]} alt={`Image of the ${project.title} project`} />
                )}
            </div>
        </div>
    );
}