function AppLayout({children}) {
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
            <footer>
                <p>footer</p>
            </footer>
        </>
        
    )
}

export default AppLayout