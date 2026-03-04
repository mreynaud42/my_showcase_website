import { Trans, useTranslation } from "react-i18next";
import IconSend from "../components/icon/send"

import "../styles/pages/contact.css";
import "../styles/components/button.css";

export default function Contact() {
    const { t } = useTranslation()

    return (
        <div className="contact">
            <div className="head"></div>
            <section className="contact">
                <h2>{t("contact.sContact.title")}</h2>
                <p><Trans i18nKey={"contact.sContact.p"} components={{ strong: <strong /> }} /></p>
                <div className="center">
                    <div className="info-contact">
                        <div className="contact-details">
                            <h3>{t("contact.sContact.detail")}</h3>
                            <a className="button-coarse" href="mailto:mathisreynaud07@gmail.com">mail: mathisreynaud07@gmail.com</a>
                            <a className="button-coarse" href="tel:+33768584081">Tel: 07 68 58 40 81</a>
                        </div>
                        <div className="social">
                            <h3>{t("contact.sContact.social")}</h3>
                            <a className="button-coarse" href="https://github.com/mreynaud42" target="_blank">GitHub: github.com/mreynaud42</a>
                            <a className="button-coarse" href="https://linkedin.com/in/mathis-reynaud" target="_blank">LinkedIn: linkedin.com/in/mathis-reynaud</a>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <a href="mailto:mathisreynaud07@gmail.com" className="button">
                        <div><p className="text-cta">{t("contact.sContact.cta")}</p></div>
                        <span><IconSend /></span>
                    </a>
                </div>
            </section>
        </div>
    );
}