import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Housing from "../pages/Housing";
import AppLayout from "../layouts/AppLayout";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout title="Accueil">
            <Home/>
            </AppLayout>

    },
    {
        path: "/about",
        element: <AppLayout title="À Propos">
            <About/>
            </AppLayout>
    },
    {
        path: "/housing",
        element: <AppLayout title="Logements">
            <Housing/>
            </AppLayout>
    },
    {
        path: "/*",
        element: <AppLayout title="Erreur 404">
            <NotFound/>
            </AppLayout>
    }
])

export default router;