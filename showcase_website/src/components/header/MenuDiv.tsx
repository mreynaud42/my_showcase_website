import { useTranslation } from "react-i18next";

import Mreynaud from "../logo/Mreynaud"
import SocialMedia from "../footer/SocialMedia"
import LangSelector from "./LangSelector";

import "../../styles/components/header/menuDiv.css";

type MenuDivType = {
    className: string;
};

export default function MenuDiv({ className }: MenuDivType) {
    const { t } = useTranslation()

    return (
        <div className={`fullscreen-menu ${className}`} >
            <div className="logo"><Mreynaud/></div>
            <LangSelector/>
            <nav className="nav-burger-menu">
                <ul>
                    <li>
                        <a href="/">{t("home.title")}</a>
                    </li>
                    <li>
                        <a href="/about">{t("about.title")}</a>
                    </li>
                    <li>
                        <a href="/projects">{t("projects.title")}</a>
                    </li>
                    <li>
                        <a href="/contact">{t("contact.title")}</a>
                    </li>
                </ul>
                <div className="social-media-menu">
                    <SocialMedia/>
                </div>
            </nav>
        </div>
    );
}