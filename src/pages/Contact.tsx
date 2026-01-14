import ButtonCTA from "../components/ButtonCTA"

import "../styles/pages/contact.css";

export default function Contact() {
    return (
        <>
            <div className="head"><h1 className="namepage">Contact</h1></div>
            <section>
                <h2>Contact me</h2>
                <p>I would be delighted to hear from you. Whether you have questions, <strong>an internship opportunity</strong>, or a potential collaboration, please feel free to contact me by email. I will respond as soon as possible.</p>
                <div className="info-contact">
                    <div className="contact-details">
                        <h3>Contact details:</h3>
                        <a href="mailto:mathisreynaud07@gmail.com">mail: mathisreynaud07@gmail.com</a>
                        <a href="tel:+33768584081">Tel: 07 68 58 40 81</a>
                    </div>
                    <div className="social">
                        <h3>Social media:</h3>
                        <a href="https://github.com/mreynaud42">GitHub: github.com/mreynaud42</a>
                        <a href="https://linkedin.com/in/mathis-reynaud">mail: linkedin.com/in/mathis-reynaud</a>
                    </div>
                </div>
                <div className="button">
                    <ButtonCTA href="mailto:mathisreynaud07@gmail.com" cta="Send me an email"/>
                </div>
            </section>
        </>
    );
}