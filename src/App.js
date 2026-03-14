import PostItem from "./components/PostItem";
import {useState} from "react";

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Desc'},
        {id: 2, title: 'JS 2', body: 'Desc 2'},
        {id: 3, title: 'JS 3', body: 'Desc 3'},
    ]);

    return (
        <div className="App">
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
}
