import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const publicRoutes = [
    {path: "/about", element: About},
    {path: "/posts", element: Posts, exact: true},
    {path: "/posts/:id", element: PostIdPage, exact: true},
    {path: "*", element: Posts, exact: true},
]

export const privateRoutes = [
    {path: "/login", element: Login, exact: true},
    {path: "*", element: Login, exact: true},
]