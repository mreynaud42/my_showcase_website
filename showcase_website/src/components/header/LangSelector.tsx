import { useTranslation } from "react-i18next";

export default function LangSelector() {
    const { i18n } = useTranslation();

    return (
        <div>
            <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option value="fr">Français</option>
                <option value="en">English</option>
            </select>
        </div>
    );
}