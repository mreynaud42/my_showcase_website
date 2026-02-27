import { Trans, useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import ButtonCTA from "../components/ButtonCTA"
import SliderCards from "../components/SliderCards"
import CardProjectHome from "../components/CardProjectHome"

import { projects } from "../data/projects"

import "../styles/pages/home.css";

type HoleProps = {
    children?: React.ReactNode;
};

function Hole({ children }: HoleProps) {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
        setPos({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
        };


        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="hole img img-front"
        style={{
            "--x": `${pos.x}px`,
            "--y": `${pos.y}px`,
        } as React.CSSProperties}>
            {children}
        </div>
    );
}

export default function Home() {
    const { t } = useTranslation()

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <div className="home">
            <div className="head">
                <div className="img img-back">
                    <>
                        <img src="/photos/windows_xp_landscape.jpg" alt="" className="landscape"/>
                        <img src="/logo/mathis_reynaud.svg" alt="" className="logo" />
                    </>
                </div>
                <Hole>
                    <>
                        <img src="/logo/mathis_reynaud.svg" alt="" className="logo" />
                        <img src="/photos/head_home/rsz_head1_bis.png" alt="" className="my-head"/>
                    </>
                </Hole>
            </div>
            <div className="info">
                <section className="me">
                    <h2>{t("home.sAbout.title")}</h2>
                    <p><Trans i18nKey={"home.sAbout.description"} components={{ strong: <strong /> }} /></p>
                    <p>{t("home.sAbout.cta")}</p>
                    <div className="button">
                        <ButtonCTA href="/about" cta={t("home.sAbout.ctaButton")}/>
                    </div>
                </section>
                <section className="me">
                    <h2>{t("home.sContact.title")}</h2>
                    <p><Trans i18nKey={"home.sContact.description"} components={{ strong: <strong /> }} /></p>
                    <p>{t("home.sContact.cta")}</p>
                    <div className="button">
                        <ButtonCTA href="/contact" cta={t("home.sContact.ctaButton")}/>
                    </div>
                </section>
            </div>
            <section className="projects">
                <h2>{t("home.sProjects.title")}</h2>
                <div className="home-slider">
                    <SliderCards>
                        {featuredProjects.map((featuredProject, index) => (
                            <CardProjectHome key={index} project={featuredProject}></CardProjectHome>
                        ))}
                    </SliderCards>
                </div>
                <div className="button">
                    <ButtonCTA href="/projects" cta={t("home.sProjects.ctaButton")}/>
                </div>
            </section>
            <section className="home-resume">
                <h2>{t("home.sResume.title")}</h2>
                <p><Trans i18nKey={"home.sResume.description"} components={{ strong: <strong /> }} /></p>
                <p>{t("home.sResume.cta")}</p>
                <div className="button">
                    <ButtonCTA href="/resume" cta={t("home.sResume.ctaButton")}/>
                </div>
            </section>
        </div>
    );
}