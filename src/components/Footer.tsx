import LogoMreynaud from "./LogoMreynaud"
import LogoLinkedin from "./LogoLinkedin"
import LogoGit from "./LogoGit"
import LogoMathisReynaud from "./LogoMathisReynaud"

import "../styles/footer.css";

export default function Footer() {
    return <footer>
        <div className="social_media">
            <div>
                <a href="https://linkedin.com/in/mathis-reynaud" target="_blank" className="linkedin">
                    <LogoLinkedin />
                    <h2>LinkedIn</h2>
                </a>
            </div>
            <div>
                <a href="https://github.com/mreynaud42" target="_blank" className="github">
                    <LogoGit />
                    <h2>GitHub</h2>
                </a>
            </div>
        </div>
        <nav>
            <a href="/">
                <div className="card-link-top">
                    <h2>Home</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et enim eget diam facilisis molestie. Morbi facilisis dictum risus sed iaculis. Morbi rutrum maximus maximus.</p>
                </div>
                <div className="card-link-bottom">
                    <p>See page</p>
                </div>
            </a>
            <a href="/about">
                <div>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et enim eget diam facilisis molestie. Morbi facilisis dictum risus sed iaculis. Morbi rutrum maximus maximus.</p>
                </div>
            </a>
            <a href="/projects">
                <div>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et enim eget diam facilisis molestie. Morbi facilisis dictum risus sed iaculis. Morbi rutrum maximus maximus.</p>
                </div>
            </a>
            <a href="/contact">
                <div>
                    <h2>Contact</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et enim eget diam facilisis molestie. Morbi facilisis dictum risus sed iaculis. Morbi rutrum maximus maximus.</p>
                </div>
            </a>
        </nav>
        <div className="marquee">
            <div>
                <span><a href="/"><LogoMreynaud /></a></span>
                <span><a href="/"><LogoMathisReynaud /></a></span>
                <span><a href="/"><LogoMreynaud /></a></span>
                <span><a href="/"><LogoMathisReynaud /></a></span>
                <span><a href="/"><LogoMreynaud /></a></span>
                <span><a href="/"><LogoMathisReynaud /></a></span>
            </div>
            <div>
                <span><a href="/"><LogoMreynaud /></a></span>
                <span><a href="/"><LogoMathisReynaud /></a></span>
                <span><a href="/"><LogoMreynaud /></a></span>
                <span><a href="/"><LogoMathisReynaud /></a></span>
                <span><a href="/"><LogoMreynaud /></a></span>
                <span><a href="/"><LogoMathisReynaud /></a></span>
            </div>
        </div>
    </footer>
}