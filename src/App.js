import {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostFilter from "./components/UI/PostFilter";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/modal/MyModal";
import PostForm from "./components/PostForm";
import usePosts from "./hooks/usePosts";
import PostService from "./API/PostService";

export default function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetchPosts()
    }, []);

    async function fetchPosts() {
        const posts = await PostService.getAll();
        setPosts(posts);
    }

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePost(post) {
        setPosts(posts.filter(p => post.id !== p.id));
    }

    return (<div className="App">
        <MyButton
            style={{marginTop: '15px'}}
            onClick={() => setModal(true)}
        >
            Добавить пост
        </MyButton>
        <MyModal
            visible={modal}
            setVisible={setModal}
        >
            <PostForm
                posts={posts}
                create={createPost}
            />
        </MyModal>
        <hr style={{margin: "10px 0"}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="Список постов"
        />
    </div>);
}
