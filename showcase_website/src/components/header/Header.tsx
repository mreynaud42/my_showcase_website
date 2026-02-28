import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import MenuDiv from "./MenuDiv"
import LangSelector from "./LangSelector";

import "../../styles/components/header/header.css";

export default function Header() {
    const { t } = useTranslation()

    const [isCheck, setIsCheck] = useState(false);

    useEffect(() => {
        const body: HTMLElement = document.body;

        if (isCheck) {
            body.classList.add("no-scroll");

        } else {
            body.classList.remove("no-scroll");
        }

        return () => body.classList.remove("no-scroll");
    }, [isCheck]);

    return (
        <header>
            <div className="top-bar logo-home"><Link to="/"><img src="/logo/mreynaud.svg" alt="logo mreynaud" /></Link></div>
            <div className="top-bar nav">
                <nav className="menu">
                    <Link to="/">{t("home.title")}</Link>
                    <Link to="/about">{t("about.title")}</Link>
                    <Link to="/projects">{t("projects.title")}</Link>
                    <Link to="/contact">{t("contact.title")}</Link>
                </nav>
            </div>
            <LangSelector/>
            <div className={`top-bar menu-click ${isCheck ? "check-menu" : ""}`}>
                <div className="burger-menu">
                    <input type="checkbox" id="menu-toggle" checked={isCheck} onChange={(e) => setIsCheck(e.target.checked)}/>
                    <label htmlFor="menu-toggle" className="menu-button">
                        <img src="/menu.svg" alt="menu" />
                    </label>
                </div>
            </div>
            <MenuDiv className={`${isCheck ? "check" : ""}`}/>
        </header>
    );
}