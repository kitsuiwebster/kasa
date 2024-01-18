import './index.scss';

function Header() {
    return(
        <header className="header">
            <img src={require("../../assets/images/logo-home.svg").default} alt="Kasa"></img>
            <nav className="header--nav">
                <a href="/">Accueil</a>
                <a href="/about">À Propos</a>
            </nav>
        </header>
    )
}

export default Header