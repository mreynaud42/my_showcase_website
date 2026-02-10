import Mreynaud from "../logo/Mreynaud"
import SocialMedia from "../footer/SocialMedia"

import "../../styles/components/header/menuDiv.css";

type MenuDivType = {
    className: string;
};

export default function MenuDiv({ className }: MenuDivType) {
    return (
        <div className={`fullscreen-menu ${className}`} >
            <div className="logo"><Mreynaud/></div>
            <nav className="nav-burger-menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <div className="social-media-menu">
                    <SocialMedia/>
                </div>
            </nav>
        </div>
    );
}