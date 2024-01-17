import './index.scss';

function Footer() {
    return(
        <footer className="footer">
            <img src={require("../../assets/images/logo-footer.svg").default} alt="Kasa"></img>
            <p>© 2020 Kasa, All rights reserved</p>
        </footer>
    )
}

export default Footer