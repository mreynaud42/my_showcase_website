import { useState } from "react";

import type { ReactNode } from "react";

import Arrow from "./icon/arrow"

import "../styles/components/sliderCards.css";

type SliderCardsProps = {
    children: ReactNode;
};

export default function SliderCards({ children }: SliderCardsProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    
    const cards = Array.isArray(children) ? children : [children];
    
    if (cards.length === 0) return (<div className="slider"></div>);

    return (
        <div className="slider">
            <div className="cards-size">
                <div className="slider-cards"
                    style={{ transform: `translateX(-${currentIndex * 100}%)`,}}>
                    {cards.map((card, index) => (<div className="card" key={index}>{card}</div>))}
                </div>
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