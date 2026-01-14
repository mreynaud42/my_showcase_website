import LogoMathisReynaud from "../logo/MathisReynaud"
import LogoMreynaud from "../logo/Mreynaud"

import "../../styles/components/footer/marquee.css";

function ElementMarquee() {
    return (
        <div>
            <span><a href="/"><LogoMreynaud /></a></span>
            <span><a href="/"><LogoMathisReynaud /></a></span>
            <span><a href="/"><LogoMreynaud /></a></span>
            <span><a href="/"><LogoMathisReynaud /></a></span>
            <span><a href="/"><LogoMreynaud /></a></span>
            <span><a href="/"><LogoMathisReynaud /></a></span>
        </div>
    );
}

export default function Marquee() {
    return (
        <div className="marquee">
            <ElementMarquee />
            <ElementMarquee />
        </div>
    );
}