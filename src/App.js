import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Desc'},
        {id: 2, title: 'JS 2', body: 'Desc 2'},
        {id: 3, title: 'JS 3', body: 'Desc 3'},
    ]);

    const [post, setPost] = useState({title: '', body: ''});
    console.log(post);

    function addNewPost(e) {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''});
    }

    return (
        <div className="App">
            <PostForm post={post} setPost={setPost} addNewPost={addNewPost}/>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}
