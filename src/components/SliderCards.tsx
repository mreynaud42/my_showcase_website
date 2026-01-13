import { useState } from "react";
import Arrow from "./icon/arrow"

import "../styles/sliderCards.css";

export default function SliderCards() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    
    const cards = [1, 2, 3, 4, 5];
    
    return (
        <div className="slider">
            <div className="slider-cards"
                style={{ transform: `translateX(-${currentIndex * 100}%)`,}}>
                {cards.map((card, index) => (<div className="card" key={index}><p>{card}</p></div>))}
            </div>
            <ol className="dots-cards">
                {cards.map((_, index) => (
                    <li key={index}
                        className={`dot ${currentIndex === index ? "is-selected" : ""}`}
                        onClick={() => setCurrentIndex(index)}>    
                    </li>
                ))}
            </ol>
            <button className="left"
                onClick={() => setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1)}>
                    <Arrow />
            </button>
            <button className="right"
                onClick={() => setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1)}>
                    <Arrow />
            </button>
        </div>
    );
}