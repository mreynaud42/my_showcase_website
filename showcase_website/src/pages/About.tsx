import { Trans, useTranslation } from "react-i18next";
import PictureCards from "../components/PictureCards"

import "../styles/pages/about.css";

type PictureCardData = {
    img: string;
    alt: string;
    caption?: string;
    captionHref?: string;
};

function CardPictureAbout() {

    let imgs: PictureCardData[] = [
        { img: "photos/about/black_bg8.jpg", alt: "", caption: "© maumau_pompom - 2026", captionHref: "https://www.instagram.com/maumau_pompom?igsh=eWEybGc4eXIwZGp4" },
        { img: "photos/about/white_bg8.jpg", alt: "", caption: "© maumau_pompom - 2026", captionHref: "https://www.instagram.com/maumau_pompom?igsh=eWEybGc4eXIwZGp4" },
        { img: "photos/about/climbing1.jpg", alt: "" },
    ]
    if (window.innerWidth > 1450) {
        imgs.unshift( { img: "photos/about/climbing3.jpg", alt: "" } );
        if (window.innerWidth > 1700) {
            imgs.push(
                { img: "photos/about/black_bg4.jpg", alt: "", caption: "© maumau_pompom - 2026", captionHref: "https://www.instagram.com/maumau_pompom?igsh=eWEybGc4eXIwZGp4" }
            );
            if (window.innerWidth > 1950) {
                imgs.splice(1, 0, 
                    { img: "photos/about/white_bg7.jpg", alt: "", caption: "© maumau_pompom - 2026", captionHref: "https://www.instagram.com/maumau_pompom?igsh=eWEybGc4eXIwZGp4" }
                );
            }
        }
    }

    return (
        <div className="card-picture-about">
            <PictureCards cards={imgs}/>
        </div>
    );
}

export default function About() {
    const { t } = useTranslation()

    const paragraphs = t("about.sAbout.paragraphs", { returnObjects: true });

    return (
        <div className="about">
            <div className="head">
                <div className="img">
                    <img src="photos/about/horiz_natural_bg.jpg" alt="" />
                </div>
                <div className="text">
                    <h1>{t("about.sHead.title")}</h1>
                    <p>{t("about.sHead.description")}</p>
                    <p>{t("about.sHead.cta")}</p>
                </div>
            </div>
            <section className="text">
                <h1>{t("about.sAbout.title")}</h1>
                {Array.isArray(paragraphs) && paragraphs.map((p, i) => (
                    <p key={i}>
                        <Trans components={{
                            strong: <strong />,
                            a: <a href="https://www.francecompetences.fr/recherche/rncp/39783/" target="_blank" rel="noopener noreferrer" />
                        }}>
                            {p}
                        </Trans>
                    </p>
                ))}
                <CardPictureAbout />
            </section>
        </div>
    );
}