import { useTranslation } from "react-i18next";

import "../styles/pages/notFound.css";

export default function NotFound() {
    const { t } = useTranslation()

    return (
        <div className="not-found">
            <h1>{t("notFound")}</h1>
        </div>
    );
}