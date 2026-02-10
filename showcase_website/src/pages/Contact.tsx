import IconSend from "../components/icon/send"

import "../styles/pages/contact.css";
import "../styles/components/button.css";

export default function Contact() {
    return (
        <>
            <div className="head"></div>
            <section className="contact">
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
                        <a href="https://github.com/mreynaud42" target="_blank">GitHub: github.com/mreynaud42</a>
                        <a href="https://linkedin.com/in/mathis-reynaud" target="_blank">LinkedIn: linkedin.com/in/mathis-reynaud</a>
                    </div>
                </div>
                <div className="button">
                    <a href="mailto:mathisreynaud07@gmail.com" className="button">
                        <div><p className="text-cta">Send me an email</p></div>
                        <span><IconSend /></span>
                    </a>
                </div>
            </section>
        </>
    );
}