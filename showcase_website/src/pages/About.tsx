import ComingSoon from "../components/ComingSoon"
import CardPictureAbout from "../components/CardPictureAbout"

import "../styles/pages/about.css";

export default function About() {
    return (
        <>
            <div className="head"><h1 className="namepage">About</h1></div>

            <section>
                <CardPictureAbout />
            </section>
            <ComingSoon />
        </>
    );
}