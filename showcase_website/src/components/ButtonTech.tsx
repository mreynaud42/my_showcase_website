import Tooltip from "./Tooltip"
import Arrow from "./icon/arrow"

import { technologies } from "../data/technologies"

import "../styles/components/buttonTech.css";

type TooltipProps = {
    technologie: string
}

export default function ButtonTech({ technologie }: TooltipProps) {

    const tech = technologies.find(tech => tech.name.toUpperCase() === technologie.toUpperCase())

    if (!tech) return null;

    return (
        <div>
            <a href={tech.url} target="_blank" className="button-tech tooltip-trigger">
                <span><p>{tech.name}</p></span>
                <span><p>docs</p><Arrow /></span>
            </a>
            <Tooltip h1={tech.name} p={tech.p} />
        </div>
    );
}