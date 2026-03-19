import PostItem from "./PostItem";

export default function PostList({posts, title, remove}) {
    return (
        <>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostItem
                    remove={remove}
                    post={post}
                    index={index}
                    key={post.id}
                />
            )}
        </>
    );
}