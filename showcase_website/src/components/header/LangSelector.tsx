import { useTranslation } from "react-i18next";

import "../../styles/components/header/langSelector.css";

export default function LangSelector() {
    const { i18n } = useTranslation();

    return (
        <div>
            <select className="lang" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option value="fr">🇫🇷 FR</option>
                <option value="en">🇬🇧 EN</option>
            </select>
        </div>
    );
}