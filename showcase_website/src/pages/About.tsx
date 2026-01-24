import ComingSoon from "../components/ComingSoon"
import CardPictureAbout from "../components/CardPictureAbout"

import "../styles/pages/about.css";

export default function About() {
    return (
        <>
            <div className="title"><h1 className="namepage">About</h1></div>
            <div className="head"></div>
            <section>
                <CardPictureAbout />
            </section>
            <ComingSoon />
        </>
    );
}