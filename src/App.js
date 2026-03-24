import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInut";

export default function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'AAAA', body: 'CCCC'},
        {id: 2, title: 'CCCC', body: 'BBBB'},
        {id: 3, title: 'BBBB', body: 'AAAAA'},
    ])
    const [selectedSort, setSelectedSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const sortedAndSearchedPosts = getSortedAndSearchedPosts();

    function getSortedPosts() {
        if (selectedSort) {
            return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))];
        } else {
            return posts;
        }
    }

    function getSortedAndSearchedPosts() {
        const sortedPosts = getSortedPosts();
        if (searchQuery) {
            return sortedPosts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
        } else {
            return sortedPosts;
        }
    }

    function sortPosts(sort) {
        setSelectedSort(sort);
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
        <MyInput
            placeholder="Поиск"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />
        {sortedAndSearchedPosts.length
            ?
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="Список постов"
            />
            :
            <h1 style={{textAlign: "center"}}>Постов не найдено</h1>
        }
    </div>);
}
