import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Desc'},
        {id: 2, title: 'JS 2', body: 'Desc 2'},
        {id: 3, title: 'JS 3', body: 'Desc 3'},
    ]);

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePost(post) {
        setPosts(posts.filter(p => post.id !== p.id));
    }

    return (<div className="App">
        <PostForm
            posts={posts}
            create={createPost}
        />
        {posts.length
            ?
            <PostList
                remove={removePost}
                posts={posts}
                title="Список постов"
            />
            :
            <h1 style={{textAlign: "center"}}>Постов не найдено</h1>
        }
    </div>);
}
