import { useEffect, useState } from "react";

import MenuDiv from "./MenuDiv"
import LangSelector from "./LangSelector";

import "../../styles/components/header/header.css";

export default function Header() {
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
            <div className="top-bar logo-home"><a href="/"><img src="/logo/mreynaud.svg" alt="logo mreynaud" /></a></div>
            <div className="top-bar nav">
                <nav className="menu">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </nav>
                <div className="burger-menu">
                    <input type="checkbox" id="menu-toggle" checked={isCheck} onChange={(e) => setIsCheck(e.target.checked)}/>
                    <label htmlFor="menu-toggle" className="menu-button">
                        <img src="/menu.svg" alt="menu" />
                    </label>
                </div>
            </div>
            <MenuDiv className={`${isCheck ? "check" : ""}`}/>
            <LangSelector/>
        </header>
    );
}