import { useParams } from "react-router-dom";

import ComingSoon from "../components/ComingSoon"

import { projects } from "../data/projects"

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) return <p>project not found</p>;

    return (
        <div className="project-detail">
            <div className="title"><h1 className="namepage">{project.title}</h1></div>
            <div className="head"></div>
            <ComingSoon />
        </div>
    );
}