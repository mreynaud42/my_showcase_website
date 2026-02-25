import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Arrow from "../icon/arrow"

import "../../styles/components/header/langSelector.css";

const languages = [
    {
        code: "fr",
        label: "FR",
        flag: "/flag_lang/France_language.webp",
    },
    {
        code: "en",
        label: "EN",
        flag: "/flag_lang/English_language.webp",
    },
];

type LanguageCode = typeof languages[number]["code"];

export default function LangSelector() {
    const { i18n } = useTranslation();

    const [open, setOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const currentLang = languages.find((l) => i18n.language.startsWith(l.code)) ?? languages[0];

    const handleSelect = (code: LanguageCode) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target;

            if (selectRef.current && target instanceof Node && !selectRef.current.contains(target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="custom-select" ref={selectRef}>
            <div className="selected" onClick={() => setOpen((prev) => !prev)}>
                <img src={currentLang.flag} alt={currentLang.label} />
                {currentLang.label}
                <span className="arrow">
                    <Arrow />
                </span>
            </div>

            {open && (
                <div className="options">
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            className="option"
                            onClick={() => handleSelect(lang.code)}
                        >
                            <img src={lang.flag} alt={lang.label} />
                            <p>{lang.label}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}