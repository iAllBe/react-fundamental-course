import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'AAAA', body: 'CCCC'},
        {id: 2, title: 'CCCC', body: 'BBBB'},
        {id: 3, title: 'BBBB', body: 'AAAAA'},
    ])
    const [selectedSort, setSelectedSort] = useState("");

    function sortPosts(sort) {
        setSelectedSort(sort);
        setPosts([...posts.sort((a, b) => a[sort].localeCompare(b[sort]))]);
    }

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
        <hr style={{margin: "10px 0"}}/>
        <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue={"Сортировка"}
            options={[
                {value: "title", name: "По заголовку"},
                {value: "body", name: "По описанию"}
            ]}
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
