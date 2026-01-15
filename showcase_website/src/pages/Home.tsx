import ButtonCTA from "../components/ButtonCTA"
import SliderCards from "../components/SliderCards"
import CardProjectHome from "../components/CardProjectHome"

import { projects } from "../data/projects"

import "../styles/pages/home.css";

export default function Home() {

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <>
            <div className="head"><h1 className="namepage">Home</h1></div>
            <div className="info">
                <section className="me">
                    <h2>Mathis Reynaud</h2>
                    <p>Currently studying computer science, I specialize in application development. This site presents my profile and my work.</p>
                    <p>Want to learn more about me?</p>
                    <div className="button">
                        <ButtonCTA href="/about" cta="About me"/>
                    </div>
                </section>
                <section className="me">
                    <h2>Let's get in touch</h2>
                    <p>I am open to professional exchanges, <strong>internship opportunities</strong>, and discussions about IT projects.</p>
                    <p>Want to contact me?</p>
                    <div className="button">
                        <ButtonCTA href="/contact" cta="Contact me"/>
                    </div>
                </section>
            </div>
            <section className="projects">
                <h2>My Featured Projects</h2>
                <SliderCards>
                    {featuredProjects.map((featuredProject, index) => (
                        <CardProjectHome key={index} project={featuredProject}></CardProjectHome>
                    ))}
                </SliderCards>
                <div className="button">
                    <ButtonCTA href="/projects" cta="See more of my projects"/>
                </div>
            </section>
            <section className="home-resume">
                <h2>Resume</h2>
                <p>I am currently seeking a <strong>4 to 6 month internship in software development starting in March 2026</strong>, in order to put my technical skills into practice within a dynamic team. Motivated, rigorous, and curious, I am looking for professional experience that will allow me to make a concrete contribution to software projects while developing my skills in application design, development, and maintenance.</p>
                <p>Want to see my resume?</p>
                <div className="button">
                    <ButtonCTA href="/resume" cta="See my resume"/>
                </div>
            </section>
        </>
    );
}