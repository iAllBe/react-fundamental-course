import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, routes} from "../router/router";
import {useContext} from "react";
import {AuthContext} from "../context";

export default function AppRouter() {
    const {isAuth} = useContext(AuthContext);

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