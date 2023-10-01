import { RouterProvider, createBrowserRouter } from "react-router-dom";


/* ---------------------------------- pages --------------------------------- */
import { LoginPage } from '../auth'; 
import { HeroesRoutes } from '../heroes'; 
import { childHeroesRoutes } from './HeroRouter'; 
/* ------------------------------- error page ------------------------------- */
import { ErrorPage } from '../heroes/pages/ErrorPage'; 


const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroesRoutes/>,
        errorElement: <ErrorPage/>,
        children: childHeroesRoutes,
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
]);

export const AppRouter = () => {
    return(
        <>
            <RouterProvider router={router} />
        </>
    );
}
