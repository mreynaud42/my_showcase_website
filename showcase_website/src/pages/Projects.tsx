import { useTranslation } from "react-i18next";
import ProjectDiv from "../components/ProjectDiv"
import ThreeLaptop from "../components/ThreeCube";

import { projects } from "../data/projects"

import "../styles/pages/projects.css";

export default function Projects() {
    const { t } = useTranslation()

    return (
        <div className="projects">
            <div className="head">
                <div className="three">
                    <ThreeLaptop />
                </div>
                <div className="text">
                    <h1>{t("projects.sHead.title")}</h1>
                    <p>{t("projects.sHead.description")}</p>
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