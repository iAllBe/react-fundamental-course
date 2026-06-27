import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";

export const routes = [
    {path: "/about", element: About},
    {path: "/posts", element: Posts, exact: true},
    {path: "/posts/:id", element: PostIdPage, exact: true},
]