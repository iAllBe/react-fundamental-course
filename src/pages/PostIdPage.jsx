import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

export default function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data)
    });

    useEffect(() => {
        fetchPostById()
    }, []);

    return (
        <div>
            {isLoading
                ? <Loader/>
                : <div>
                    <h1>Страница поста {post.id}</h1>
                    <div>{post.id}. {post.title}</div>
                    <div>{post.body}</div>
                </div>
            }
        </div>
    )
}