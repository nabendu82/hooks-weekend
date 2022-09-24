import axios from 'axios';
import React, { useState } from 'react'

const PostForm = () => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const post = await axios.post(url, {userId, title, body});
        console.log(post.data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userId">UserID </label>
                <input type="text" id="userId" value={userId} onChange={e => setUserId(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor="title">Title </label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor="body">Body </label>
                <textarea id="body" value={body} onChange={e => setBody(e.target.value)}></textarea>
            </div>
            <br />
            <input type="submit" value="Send" />
        </form>
    )
}

export default PostForm