import Download from "../components/icon/download"

import "../styles/pages/resume.css";

export default function Resume() {
    return (
        <>
            <div className="head"><h1 className="namepage">Resume</h1></div>
            <section className="resume">
                <h2>Mathis Reynaud's resume</h2>
                <iframe src="/external_resource/resume.pdf#page=1&zoom=20" width="600" height="848"/>
                <div className="button">
                    <a href="/external_resource/resume.pdf" className="button-download" download="_Mathis-Reynaud-resume.pdf">
                        <p className="text-cta">Download resume</p>
                        <span><Download/></span>
                    </a>
                </div>
            </section>
        </>
    );
}