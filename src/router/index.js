import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";

const router = createBrowserRouter (
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/notfound",
        element: <NotFound/>
    },
    {
        path: "/about",
        element: <About/>
    }
)

export default router;