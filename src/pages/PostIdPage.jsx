import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

export default function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });

    const [fetchCommentsPostById, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(),
            fetchCommentsPostById()
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
            {isCommentsLoading
                ? <Loader/>
                : <div>
                    <h3 style={{margin: '40px 0 5px 0'}}>Комментарии:</h3>
                    {comments.map(com => {
                        return (
                            <div style={{marginBottom: '5px'}}>
                                <div><b>{com.email}</b></div>
                                <div>{com.body}</div>
                            </div>
                        )

                    })}
                </div>
            }
        </div>
    )
}