import { Link } from "react-router-dom";
import type { Project } from "../data/projects"

import "../styles/components/cardProjectHome.css";

type CardProjectHomeProps = {
    project: Project,
}

export default function CardProjectHome({ project }: CardProjectHomeProps) {

    return (
        <Link to={`/projects/${project.id}`} className="card-project-home">
            <div className="text">
                <h3>{project.title}</h3>
                {project.shortDescription.description.map((p, index) => (
                    <p key={index}>{p}</p>
                ))}
            </div>
        </Link>
    );
}