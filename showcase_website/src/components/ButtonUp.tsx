
import { useState, useEffect } from "react";

import Arrow from "./icon/arrow"

import "../styles/components/buttonUp.css";

export default function ButtonUp() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        if (window.scrollY > 10) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return ((visible &&
        <div className="div-button-up">
            <a href="#top" className="button-up">
                <Arrow />
                <p>Back to Top</p>
            </a>
        </div>
    ));
}