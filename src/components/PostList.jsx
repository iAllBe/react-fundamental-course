import PostItem from "./PostItem";

export default function PostList({posts, title}) {
    return (
        <>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostItem post={post} index={index} key={post.id}/>
            )}
        </>
    );
}