import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const posts = await axios.get(url);
            setPosts(posts.data);
        }
        fetchPosts()
    },[])

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default PostList