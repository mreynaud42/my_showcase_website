import Arrow from "./icon/arrow"

import "../styles/buttonCTA.css";

type ButtonCtaType = {
    href: string;
    cta: string;
}

export default function ButtonCTA({ href, cta }: ButtonCtaType) {
    return (
        <a href={href} className="button-cta">
            <div>
                <p className="text-cta">{cta}</p>
            </div>
            <span>
                <Arrow />
            </span>
        </a>
    );
}