import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import { ScrollToTop } from "components/ScrollToTop";
import Home from "pages/home";

const Routes = () => {
    const rootRoutes = {
        path: '/',
        element: <Home />,
        // element: <DefaultLayout />,
    };

    const noMatchRoutes = {
        path: '*',
        element: <Home />,
    };

    // const mainRoutes = {
    //     path: '/main',
    //     element: <Home />
    // }

    const routes = [rootRoutes, noMatchRoutes];

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