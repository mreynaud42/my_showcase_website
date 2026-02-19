import Header from "./header/Header"
import Footer from "./footer/Footer"
import ButtonUp from "./ButtonUp"

import "../styles/components/layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    
    return (
        <>
            <Header />
            <main>{children}</main>
            <ButtonUp />
            <Footer />
        </>
    );
}