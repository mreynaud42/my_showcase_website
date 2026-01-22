
import { useState } from "react";

import "../styles/components/cardPictureAbout.css";

function getCardTransform(index: number, total: number) {
  const center = (total - 1) / 2;
  const shift = index - center;

  return {
    tx: `${shift * -1.5}rem`,
    ty: `${Math.abs(shift) * 0.8}rem`,
    rot: `${shift * 7}deg`,
    z: total - Math.abs(shift)
  };
}

type PictureCardData = {
    img: string;
    alt: string;
    caption: string;
};

type PictureCardsProps = {
    cards: PictureCardData[];
};

export default function PictureCards({ cards }: PictureCardsProps) {
    const [hover, setHover] = useState<number | null>(null);

    return (
        <div className="picture-cards">
            {cards.map((card, i) => {
                let shift = "0rem";

                if (hover !== null && hover !== i)
                    shift = i < hover ? "-2rem" : "2rem";

                const t = getCardTransform(i, cards.length);

                return (
                    <div key={i} className="card" style={
                        {
                            "--tx": `calc(${t.tx} + ${shift})`,
                            "--ty": t.ty,
                            "--rot": t.rot,
                            zIndex: t.z
                        } as React.CSSProperties
                    } onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
                        <figure>
                            <img src={card.img} alt={card.alt} />
                            <figcaption>{card.caption}</figcaption>
                        </figure>
                    </div>
                )
            })}
        </div>
    );
}