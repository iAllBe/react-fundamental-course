import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import {privateRoutes, publicRoutes, routes} from "../router/router";

export default function AppRouter() {
    const isAuth = true;

    return (
        isAuth
            ?
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        exact={route.exact}
                        path={route.path}
                        element={<route.element/>}
                    />
                )}
            </Routes>
            :
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        exact={route.exact}
                        path={route.path}
                        element={<route.element/>}
                    />
                )}
            </Routes>
    )
}