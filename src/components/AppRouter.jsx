import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";

export default function AppRouter() {
    return (
        <Routes>
            <Route
                path="/about"
                element={<About/>}
            >
            </Route>
            <Route
                path="/posts"
                element={<Posts/>}
            >
            </Route>
            <Route
                path="*"
                element={<Error/>}
            >
            </Route>
        </Routes>
    )
}