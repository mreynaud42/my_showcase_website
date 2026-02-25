import { useEffect, useState } from "react";

import type { ReactNode } from "react";

import Arrow from "./icon/arrow"

import "../styles/components/sliderCards.css";

type SliderCardsProps = {
    children: ReactNode;
};

export default function SliderCards({ children }: SliderCardsProps) {
    const cards = Array.isArray(children) ? children : [children];
    
    if (cards.length === 0) return (<div className="slider"></div>);

    const [currentIndex, setCurrentIndex] = useState<number>(2);
    const [cardIndex, setCardIndex] = useState<number>(0);
    const [transition, setTransition] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    

    const extendedCards = [
        cards[cards.length - 2],
        cards[cards.length - 1],
        ...cards,
        cards[0],
        cards[1]
    ];
    
    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prev => prev - 1);

        setCardIndex(cardIndex === 0 ? cards.length - 1 : cardIndex - 1)
    };
    
    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prev => prev + 1);
    
        setCardIndex(cardIndex === cards.length - 1 ? 0 : cardIndex + 1);
    };

    const handleTransitionEnd = () => {
        setIsAnimating(false);

        if (currentIndex <= 1) {
            setCurrentIndex(cards.length + 1);
            setTransition(false);
        }
        if (currentIndex >= cards.length + 2) {
            setCurrentIndex(2);
            setTransition(false);
        }
    };

    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => {
                setTransition(true);
            });
        }
    }, [transition]);

    return (
        <div className="slider">
            <div className="cards-size">
                <div className="slider-cards"
                    style={{
                        transform: `translateX(calc(${-currentIndex} * (100% + 70px)))`,
                        transition: transition ? "transform 0.5s ease" : "none"
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedCards.map((card, index) => (
                        <div className="card" key={index}>
                            {card}
                        </div>
                    ))}
                </div>
            </div>
            <ol className="dots-cards">
                {cards.map((_, index) => (
                    <li key={index}
                        className={`dot ${cardIndex === index ? "is-selected" : ""}`}
                        onClick={() => {
                            setCurrentIndex(index + 2);
                            setCardIndex(index);
                        }}
                    >    
                    </li>
                ))}
            </ol>
            <button className="left" onClick={handlePrev} disabled={isAnimating}>
                <span className="no-hover"><Arrow /></span>
                <span className="hover"><Arrow /></span>
            </button>
            <button className="right" onClick={handleNext} disabled={isAnimating}>
                <span className="no-hover"><Arrow /></span>
                <span className="hover"><Arrow /></span>
            </button>
        </div>
    );
}