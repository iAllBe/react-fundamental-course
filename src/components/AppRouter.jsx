import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

export default function AppRouter() {
    return (
        <Routes>
            <Route
                path="/about"
                element={<About/>}
            >
            </Route>
            <Route
                exact
                path="/posts"
                element={<Posts/>}
            >
            </Route>
            <Route
                exact
                path="/posts/:id"
                element={<PostIdPage/>}
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