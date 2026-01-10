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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et enim eget diam facilisis molestie. Morbi facilisis dictum risus sed iaculis. Morbi rutrum maximus maximus.</p>
                </CardLink>
                <CardLink href="/about" title="About">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et enim eget diam facilisis molestie. Morbi facilisis dictum risus sed iaculis. Morbi rutrum maximus maximus.</p>
                </CardLink>
                <CardLink href="/projects" title="Projects">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et enim eget diam facilisis molestie. Morbi facilisis dictum risus sed iaculis. Morbi rutrum maximus maximus.</p>
                </CardLink>
                <CardLink href="/contact" title="Contact" cta="Contact me">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et enim eget diam facilisis molestie. Morbi facilisis dictum risus sed iaculis. Morbi rutrum maximus maximus.</p>
                </CardLink>
            </nav>
            <Marquee />
        </footer>
    );
}