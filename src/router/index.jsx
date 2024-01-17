import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/index";
import NotFound from "../pages/not-found/index";
import About from "../pages/about/index";
import Housing from "../pages/housing/index";
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
        path: "/housing/:id",
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