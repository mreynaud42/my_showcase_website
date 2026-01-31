import "../styles/components/tooltip.css"


type TooltipProps = {
    h1: string
    p: string
}

export default function Tooltip(tooltip: TooltipProps) {

    return (
        <div className="tooltip">
            <h1>{tooltip.h1}</h1>
            <p >{tooltip.p}</p>
        </div>
    );
}