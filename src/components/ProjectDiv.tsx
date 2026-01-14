import ButtonCTA from "./ButtonCTA"

import "../styles/components/projectDiv.css";

export type ProjectProps = {
    id: number;
    href: string;
    title: string;
    description: string[];
    hrefGithub: string;
    languageUse: string[];
    img?: string;
}

type ProjectDivProps = {
    project: ProjectProps,
}

export default function ProjectDiv({ project }: ProjectDivProps) {
    return (
        <section id={`project${project.id}`} className="project">
            <div className="project-text">
                <div className="project-description">
                    <h2>{project.title}</h2>
                    {project.description.map((projectP, index) => (
                        <p key={index}>{projectP}</p>
                    ))}
                </div>
                <div className="button">
                    <ButtonCTA href={project.href} cta="See my project"/>
                </div>
                <div className="footer">
                    <div>
                        <p>Language use:</p>
                        <div className="languages">
                            {project.languageUse.map((language, index) => (
                                <span key={index}>{language}</span>
                            ))}
                        </div>
                    </div>
                    <a href={project.hrefGithub}>Project GitHub</a>
                </div>
            </div>
            {project.img && (
                <div className="project-img"><img src={project.img} alt={`project project${project.id}`} /></div>
            )}
        </section>
    );
}