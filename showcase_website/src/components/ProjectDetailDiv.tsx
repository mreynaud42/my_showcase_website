import LogoGitHub from "./logo/Git";
import ButtonTech from "./ButtonTech"

import type { Project } from "../data/projects"

import "../styles/components/projectDetailDiv.css";
import "../styles/components/projectDetailFooter.css";

type ProjectDetailProps = {
    project: Project,
}

function ProjectDetailFooter({ project }: ProjectDetailProps) {
    return (
        <div className="footer">
            {(project.technologies.length !== 0) && (
                <div className="technologies">
                        {project.technologies.map((tech, index) => (
                            <ButtonTech key={index} technologie={tech}/>
                        ))}
                </div>
            )}
            {(project.githubUrl || project.demoUrl) && (
                <div className="links">
                    {project.githubUrl && (
                        <div className="icon">
                            <a href={project.githubUrl} target="_blank"><LogoGitHub /></a>
                            <span className="tooltip">GitHub</span>
                        </div>
                    )}
                    {project.demoUrl && (
                        <div className="icon">
                            <a href={project.githubUrl} target="_blank">Demo</a>
                            <span className="tooltip">Demo</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function ProjectDetailBody({ project }: ProjectDetailProps) {
    return (
        <>
            <div className="project-text">
                <div className="project-description">
                    <h2>{project.title}</h2>
                    {project.fullDescription[0].description.map((p, index) => (
                        <p key={index}>{p}</p>
                    ))}
                </div>
            </div>
            {project.fullDescription[0].imgs && (
                <div className="project-img">
                    {project.fullDescription[0].imgs.map((img, index) => (
                        <img key={index} src={img} alt={`Image of the ${project.title} project - image ${index + 1}`} />
                    ))}
                </div>
            )}
        </>
    );
}

export default function ProjectDetailDiv({ project }: ProjectDetailProps) {
    return (
        <section id={`project${project.id}`} className="project">
            <ProjectDetailBody project={project}/>
            <ProjectDetailFooter project={project}/>
        </section>
    );
}