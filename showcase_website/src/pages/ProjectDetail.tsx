import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import ProjectDetailDiv from "../components/ProjectDetailDiv"
import ButtonCTA from "../components/ButtonCTA"

import { projects } from "../data/projects"

import "../styles/pages/projectDetail.css";

export default function ProjectDetail() {
    const { t } = useTranslation()

    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) return <p>project not found</p>;

    return (
        <div className="project-detail">
            <div className="head"></div>
            <div className="title"><h1 className="namepage">{project.title}</h1></div>
            <ProjectDetailDiv project={project} />
            <div className="button">
                <ButtonCTA href={`/projects`} cta={t("projectDetail.cta")}/>
            </div>
        </div>
    );
}