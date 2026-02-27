import { Trans, useTranslation } from "react-i18next";
import Download from "../components/icon/download"

import "../styles/pages/resume.css";
import "../styles/components/button.css";


export default function Resume() {
    const { t } = useTranslation()

    return (
        <div className="resume">
            <div className="head"></div>
            <section className="resume">
                <h2>{t("resume.sResume.title")}</h2>
                <p><Trans i18nKey={"resume.sResume.description"} components={{ strong: <strong /> }} /></p>
                <iframe src="/external_resource/resume.pdf#page=1&zoom=20" width="600" height="848"/>
                <div className="button">
                    <a href="/external_resource/resume.pdf" className="button" download="_Mathis-Reynaud-resume.pdf">
                        <div><p className="text-cta">{t("resume.sResume.cta")}</p></div>
                        <span><Download/></span>
                    </a>
                </div>
            </section>
        </div>
    );
}