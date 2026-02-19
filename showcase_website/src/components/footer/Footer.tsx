import { Trans, useTranslation } from "react-i18next";

import Marquee from "./Marquee"
import CardLink from "./CardLink"
import SocialMedia from "./SocialMedia"

import "../../styles/components/footer/footer.css";

export default function Footer() {
    const { t, i18n } = useTranslation()

    const pages: string[] = ["home", "about", "projects", "contact"];
    return (
        <footer>
            <SocialMedia />
            <nav>
                {pages.map((page, i) => (
                    <CardLink
                        key={i} href="/" title={t(`${page}.title`)}
                        cta={i18n.exists(`${page}.cta`)? t(`${page}.cta`) : t("common.ctaDefault")}
                    >
                        <p><Trans i18nKey={`${page}.description`} components={{ strong: <strong /> }} /></p>
                    </CardLink>
                ))}
            </nav>
            <Marquee />
        </footer>
    );
}
