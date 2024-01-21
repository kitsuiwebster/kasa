import './index.scss';
import '../../assets/scss/index.scss'

function NotFound() {
    return(
        <div className="not-found-container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retournez sur la page d'accueil</a>
        </div>
    )
}

export default NotFound
