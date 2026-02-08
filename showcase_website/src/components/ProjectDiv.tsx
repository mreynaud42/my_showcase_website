import LogoGitHub from "./logo/Git";
import ButtonTech from "./ButtonTech"
import ButtonCTA from "./ButtonCTA"

import type { Project } from "../data/projects"

import "../styles/components/projectDiv.css";
import "../styles/components/projectDivFooter.css";

type ProjectDivProps = {
    project: Project,
}

function ProjectDivFooter({ project }: ProjectDivProps) {
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

export default function ProjectDiv({ project }: ProjectDivProps) {
    return (
        <section id={`project${project.id}`} className="project">
            <div className="project-text">
                <div className="project-description">
                    <h2>{project.title}</h2>
                    {project.shortDescription.description.map((p, index) => (
                        <p key={index}>{p}</p>
                    ))}
                </div>
            </div>
            {project.shortDescription.imgs && (
                <div className="project-img">
                    {project.shortDescription.imgs.map((img, index) => (
                        <img key={index} src={img} alt={`Image of the ${project.title} project - image ${index + 1}`} />
                    ))}
                </div>
            )}
            {project.featured && (
                <div className="button">
                    <ButtonCTA href={`/projects/${project.id}`} cta="See my project"/>
                </div>
            )}
            <ProjectDivFooter project={project}/>
        </section>
    );
}