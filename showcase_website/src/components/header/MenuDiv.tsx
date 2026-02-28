import { useTranslation } from "react-i18next";

import Mreynaud from "../logo/Mreynaud"
import SocialMedia from "../footer/SocialMedia"
import LangSelector from "./LangSelector";

import "../../styles/components/header/menuDiv.css";
import { Link } from "react-router-dom";

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
                        <Link to="/">{t("home.title")}</Link>
                    </li>
                    <li>
                        <Link to="/about">{t("about.title")}</Link>
                    </li>
                    <li>
                        <Link to="/projects">{t("projects.title")}</Link>
                    </li>
                    <li>
                        <Link to="/contact">{t("contact.title")}</Link>
                    </li>
                </ul>
                <div className="social-media-menu">
                    <SocialMedia/>
                </div>
            </nav>
        </div>
    );
}