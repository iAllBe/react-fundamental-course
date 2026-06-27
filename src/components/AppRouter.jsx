import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import {routes} from "../router/router";

export default function AppRouter() {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    exact={route.exact}
                    path={route.path}
                    element={<route.element/>}
                />
            )}
            <Route
                path="*"
                element={<Posts/>}
            />
        </Routes>
    )
}