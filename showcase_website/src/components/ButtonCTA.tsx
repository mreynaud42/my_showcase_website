import { Link } from "react-router-dom";

import Arrow from "./icon/arrow"

import "../styles/components/buttonCTA.css";

type ButtonCtaType = {
    href: string;
    cta: string;
}

export default function ButtonCTA({ href, cta }: ButtonCtaType) {
    return (
        <Link to={href} className="button-cta">
            <span>
                <Arrow />
            </span>
            <div>
                <p className="text-cta">{cta}</p>
            </div>
        </Link>
    );
}