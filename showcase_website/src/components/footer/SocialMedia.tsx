import type { ReactNode } from "react";

import LogoLinkedin from "../logo/Linkedin"
import LogoGitHub from "../logo/Git"

import "../../styles/components/footer/socialMedia.css";

type MediaType = {
    href: string;
    nameMedia: string;
    children: ReactNode;
}

function Media({ href, nameMedia, children }: MediaType) {
    return (
        <div>
            <a href={href} target="_blank">
                <div>
                    {children}
                    <h2>{nameMedia}</h2>
                </div>
            </a>
        </div>
    );
}

export default function SocialMedia() {
    return (
        <div className="social-media">
            <Media href="https://linkedin.com/in/mathis-reynaud" nameMedia="LinkedIn">
                <LogoLinkedin />
            </Media>
            <Media href="https://github.com/mreynaud42" nameMedia="GitHub">
                <LogoGitHub />
            </Media>
        </div>
    );
}