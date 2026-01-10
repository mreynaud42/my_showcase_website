import ButtonCTA from "../components/ButtonCTA"

import "../styles/home.css";

export default function Home() {
    return (
        <>
            <div className="head"><h1 className="namepage">Home</h1></div>
            <div className="me">
                <h2>Mathis Reynaud</h2>
                <p>Morbi vulputate et elit eget ornare. Nullam imperdiet sit amet ligula eu tristique. Ut commodo cursus turpis, et feugiat justo volutpat a. In massa lorem, lobortis non accumsan sed, dictum nec justo. Aliquam vestibulum ante et massa fermentum elementum. Nam quis dictum tellus, facilisis accumsan urna. Nullam suscipit, diam id bibendum aliquet, massa arcu mollis magna, vitae aliquet est sem quis ex.</p>
                <p>Aliquam in laoreet lectus.</p>
                <div className="button">
                    <ButtonCTA href="/contact" cta="Contact me"/>
                    <ButtonCTA href="/projects" cta="See my projects"/>
                </div>
            </div>
        </>
    );
}