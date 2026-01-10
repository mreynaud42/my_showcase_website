import type { ReactNode } from "react";

import "../../styles/footer/cardLink.css";

type CardLinkType = {
    href: string;
    title: string;
    children: ReactNode;
    cta?: string;
}

export default function CardLink({ href, title, children, cta = "See page"}: CardLinkType) {
    return <a href={href} className="card-link">
        <div className="card-link-top">
            <h2>{title}</h2>
            {children}
        </div>
        <div className="card-link-bottom">
            <p>{cta}</p>
        </div>
    </a>
}
