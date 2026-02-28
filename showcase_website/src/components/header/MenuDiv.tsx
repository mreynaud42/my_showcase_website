import { useTranslation } from "react-i18next";

import Mreynaud from "../logo/Mreynaud"
import SocialMedia from "../footer/SocialMedia"
import LangSelector from "./LangSelector";

import "../../styles/components/header/menuDiv.css";
import { Link } from "react-router-dom";

type MenuDivType = {
    className: string;
    setIsCheck: React.Dispatch<React.SetStateAction<boolean>>
};

export default function MenuDiv({ className, setIsCheck }: MenuDivType) {
    const { t } = useTranslation()

    return (
        <div className={`fullscreen-menu ${className}`} >
            <div className="logo"><Mreynaud/></div>
            <LangSelector/>
            <nav className="nav-burger-menu">
                <ul>
                    <li>
                        <Link to="/" onClick={() => setIsCheck(false)}>{t("home.title")}</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsCheck(false)}>{t("about.title")}</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={() => setIsCheck(false)}>{t("projects.title")}</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setIsCheck(false)}>{t("contact.title")}</Link>
                    </li>
                </ul>
                <div className="social-media-menu">
                    <SocialMedia/>
                </div>
            </nav>
        </div>
    );
}