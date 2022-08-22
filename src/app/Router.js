import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import { ScrollToTop } from "components/ScrollToTop";
import Home from "pages/home";

const Routes = () => {
    const rootRoutes = {
        path: '/',
        element: <Navigate to="/main" />,
        // element: <DefaultLayout />,
    };

    const noMatchRoutes = {
        path: '*',
        element: <Navigate to="/main" />,
    };

    const mainRoutes = {
        path: '/main',
        element: <Home />
    }

    const routes = [rootRoutes, noMatchRoutes, mainRoutes];

    return useRoutes(routes);
};

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes />
        </BrowserRouter>
    );
};

export default Router;