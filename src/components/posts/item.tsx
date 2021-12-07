import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostApi from '../../api/post';
import PostItem from '../../types/post';

const Item: React.FC = () => {
    const { id } = useParams();
    const [post, setPost] = useState<PostItem>();
    useEffect(() => {
        getPost(id);
    }, [id]);

    const getPost = (id: string | undefined) => {
        PostApi.get(id)
            .then((response: any) => {
                setPost(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <>
            {post && (
                <div>
                    <h2 className="p-2 bg-info text-white text-center">Post Item ID: {id}</h2><br />
                    <table className="table table-striped">
                        <thead>
                            <th>UserId</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-grid">
                        <a href="/posts" className="btn btn-primary btn-block">Return Post List</a>
                    </div>
                </div>
            )}
        </>
    )
}

export default Item;