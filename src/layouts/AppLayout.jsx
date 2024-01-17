import Footer from "../components/footer/index";
import "./index.scss"

function AppLayout({children, title}) {
if (title) {
    document.title = title;
}

    return (
        <>
            <header className="layout">
                <img src={require("../assets/images/logo-home.svg").default} alt="Kasa"></img>
                <nav className="layout--nav">
                    <a href="/">Accueil</a>
                    <a href="/about">À Propos</a>
                </nav>
            </header>
            {children}
            <Footer/>
        </>
        
    )
}

export default AppLayout