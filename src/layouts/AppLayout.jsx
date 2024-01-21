import Footer from "../components/footer/index";
import Header from "../components/header";
import "./index.scss"

function AppLayout({children, title}) {
if (title) {
    document.title = title;
}

    return (
        <>
            <div className="layout-container">
                <Header/>
                    <div className="layout-main">
                        {children}
                    </div>
                <Footer/>
            </div>
        </>
        
    )
}

export default AppLayout