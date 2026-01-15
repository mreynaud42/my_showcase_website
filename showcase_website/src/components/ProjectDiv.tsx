import ButtonCTA from "./ButtonCTA"

import type { Project } from "../data/projects"

import "../styles/components/projectDiv.css";

type ProjectDivProps = {
    project: Project,
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
            <div className="footer">
                <div className="button">
                    <ButtonCTA href={`/projects/${project.id}`} cta="See my project"/>
                </div>
                <div className="language-use">
                    <p><strong>Language use:</strong></p>
                    <div className="languages">
                        {project.technologies.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
                {(project.githubUrl || project.demoUrl) && (
                    <div className="link">
                        <p><strong>Link:</strong></p>
                        {project.githubUrl && (
                            <a href={project.githubUrl}>GitHub</a>
                        )}
                        {project.demoUrl && (
                            <a href={project.githubUrl}>Demo</a>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}