import MyButton from "./UI/button/MyButton";

export default function PostItem({post, index}) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{index + 1}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton disabled>Удалить</MyButton>
            </div>
        </div>
    );
};