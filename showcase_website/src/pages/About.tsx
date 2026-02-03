import ComingSoon from "../components/ComingSoon"
import CardPictureAbout from "../components/CardPictureAbout"

import "../styles/pages/about.css";

export default function About() {
    return (
        <>
            <div className="title"><h1 className="namepage">About</h1></div>
            <div className="head"></div>
            <section className="text">
                <h1>About me</h1>
                <p>Hi, my name is <strong>Mathis Reynaud</strong>. I am a student at <strong>42 Lyon</strong>, currently working toward a <a href="https://www.francecompetences.fr/recherche/rncp/39783/" target="_blank">Level 6 RNCP certification (39783)</a>. As part of this journey, I am actively looking for an <strong>internship</strong>, followed by a work-study position, to further develop my skills and gain a deeper understanding of the tech industry.</p>
                <p>I have been passionate about programming since middle school, where I created my first games using <strong>Scratch</strong>, both at school and at home. This interest grew stronger in high school during my <strong>STI2D degree</strong>, specializing in <strong>Information Systems and Digital Technologies</strong> (<strong>SIN</strong>), which provided me with solid foundations in computer science. Alongside my studies, I also learned <strong>HTML</strong> and <strong>CSS</strong> through an online course.</p>
                <p>I then continued my education at the <strong>Computer Science Institute of Technology</strong> (<strong>IUT</strong>) in Valence, where I explored various programming languages and strengthened my technical fundamentals. After successfully completing my first year, I decided to join <strong>42 Lyon</strong>, drawn by its unique learning approach. There, I mainly worked with <strong>C</strong>, <strong>C++</strong>, and <strong>web development</strong>, while also developing essential skills such as <strong>autonomy</strong>, <strong>rigor</strong>, and the ability to <strong>learn how to learn</strong>.</p>
                <p>Outside of technology, I have been practicing <strong>climbing</strong> for over 10 years and enjoy sports in general. I am also passionate about games, especially <strong>board games</strong>, <strong>strategy</strong>, and <strong>logic games</strong>, with a particular interest in <strong>chess</strong>.</p>
            </section>
            <section>
                <CardPictureAbout />
            </section>
            <ComingSoon />
        </>
    );
}