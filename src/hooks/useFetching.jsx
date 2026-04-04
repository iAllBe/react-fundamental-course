import {useState} from "react";

export default function useFetching(callback) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchPosts() {
        try {
            setIsLoading(true);
            await callback();
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return ([fetchPosts, isLoading, error]);
}
