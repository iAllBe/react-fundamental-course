import {useState} from "react";
import PostList from "./components/PostList";
import PostFilter from "./components/UI/PostFilter";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/modal/MyModal";
import PostForm from "./components/PostForm";

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'AAAA', body: 'CCCC'},
        {id: 2, title: 'CCCC', body: 'BBBB'},
        {id: 3, title: 'BBBB', body: 'AAAAA'},
        {id: 4, title: 'aaaa', body: 'zzzzz'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = getSortedAndSearchedPosts();
    const [modal, setModal] = useState(false);

    function getSortedPosts() {
        if (filter.sort) {
            return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))];
        } else {
            return posts;
        }
    }

    function getSortedAndSearchedPosts() {
        const sortedPosts = getSortedPosts();
        if (filter.query) {
            return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query.toLowerCase()));
        } else {
            return sortedPosts;
        }
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
