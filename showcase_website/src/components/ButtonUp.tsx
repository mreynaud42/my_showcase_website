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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return ;

    return (
        <div className="div-button-up">
            <button className="button-up" onClick={scrollToTop}>
                <Arrow />
                <p>Back to Top</p>
            </button>
        </div>
    );
}