import './index.scss';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
            <Link to="/"> 
                <img src={require("../../assets/images/logo-home.svg").default} alt="Kasa" />
            </Link>
            <nav className="header--nav">
                <a href="/">Accueil</a>
                <a href="/about">À Propos</a>
            </nav>
        </header>
    );
}

export default Header