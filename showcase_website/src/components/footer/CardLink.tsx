import { Link } from "react-router-dom";

import type { ReactNode } from "react";

import "../../styles/components/footer/cardLink.css";

type CardLinkType = {
    href: string;
    title: string;
    children: ReactNode;
    cta?: string;
}

export default function CardLink({ href, title, children, cta }: CardLinkType) {
    return (
        <Link to={href} className="card-link">
            <div className="card-link-top">
                <h2>{title}</h2>
                {children}
            </div>
            <div className="card-link-bottom">
                <p>{cta}</p>
            </div>
        </Link>
    );
}
