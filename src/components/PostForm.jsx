import MyInput from "./UI/input/MyInut";
import MyButton from "./UI/button/MyButton";

export default function PostForm({post, setPost, addNewPost}) {
    return (
        <form>
            <MyInput type="text" placeholder="Название поста"
                     onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput type="text" placeholder="Описание поста"
                     onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}