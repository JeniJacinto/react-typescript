//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import PostApi from '../../api/post';
import PostItem from '../../types/post';

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Array<PostItem>>([]);
    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        PostApi.getAll()
         .then((response: any) => {
            setPosts(response.data);
         })
         .catch((e: Error) => {
             console.log(e);
         });
    };

    return (
        <>
            {posts.length ? (
                <div>
                    <h1>Post List</h1><a href="/">Return</a>
                    <table>
                        <thead>
                            <th>UserId</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </thead>
                        <tbody>
                            { posts.map((post, index) => (
                                <tr key={index}>
                                    <td>{ post.userId }</td>
                                    <td>{ post.id }</td>
                                    <td><a href={`/posts/${post.id}`}>{ post.title }</a></td>
                                    <td>{ post.body }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ):<></>}
        </>
    )
};

export default Posts;