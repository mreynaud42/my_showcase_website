import Marquee from "./Marquee"
import CardLink from "./CardLink"
import SocialMedia from "./SocialMedia"

import "../../styles/footer/footer.css";

export default function Footer() {
    return (
        <footer>
            <SocialMedia />
            <nav>
                <CardLink href="/" title="Home">
                    <p>A space dedicated to showcasing my skills, experience, and IT projects.</p>
                </CardLink>
                <CardLink href="/about" title="About" cta="About me">
                    <p>As a developer passionate about IT and modern technologies, I present my career path here.</p>
                </CardLink>
                <CardLink href="/projects" title="Projects" cta="See my projects">
                    <p>A selection of personal and professional projects highlighting my technical skills, working methods, and approach to IT development.</p>
                </CardLink>
                <CardLink href="/contact" title="Contact" cta="Contact me">
                    <p>Have a question or a <strong>professional opportunity</strong>? Feel free to contact me to discuss or learn more about my profile.</p>
                </CardLink>
            </nav>
            <Marquee />
        </footer>
    );
}