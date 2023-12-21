import Footer from "../components/Footer";

function AppLayout({children, title}) {
if (title) {
    document.title = title;
}

    return (
        <>
            <header>
                <h1>Kasa</h1>
                <nav>
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