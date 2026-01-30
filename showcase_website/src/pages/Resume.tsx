import Download from "../components/icon/download"

import "../styles/pages/resume.css";
import "../styles/components/button.css";


export default function Resume() {
    return (
        <>
            <div className="title"><h1 className="namepage">Resume</h1></div>
            <div className="head"></div>
            <section className="resume">
                <h2>Mathis Reynaud's resume</h2>
                <p>I am currently seeking a <strong>4 to 6 month internship in software development starting in March 2026</strong>, in order to put my technical skills into practice within a dynamic team. Motivated, rigorous, and curious, I am looking for professional experience that will allow me to make a concrete contribution to software projects while developing my skills in application design, development, and maintenance.</p>
                <iframe src="/external_resource/resume.pdf#page=1&zoom=20" width="600" height="848"/>
                <div className="button">
                    <a href="/external_resource/resume.pdf" className="button" download="_Mathis-Reynaud-resume.pdf">
                        <div><p className="text-cta">Download resume</p></div>
                        <span><Download/></span>
                    </a>
                </div>
            </section>
        </>
    );
}