export default function usePosts(posts, sort, query) {
    function getSortedPosts() {
        if (sort) {
            return [...posts.sort((a, b) => a[sort].localeCompare(b[sort]))];
        } else {
            return posts;
        }
    }

    function getSortedAndSearchedPosts() {
        const sortedPosts = getSortedPosts();
        if (query) {
            return sortedPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
        } else {
            return sortedPosts;
        }
    }

    return getSortedAndSearchedPosts();
}