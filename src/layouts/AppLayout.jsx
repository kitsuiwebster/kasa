import Footer from "../components/footer/index";
import Header from "../components/header";
import "./index.scss"

function AppLayout({children, title}) {
if (title) {
    document.title = title;
}

    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
        
    )
}

export default AppLayout