import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import internal from 'stream';
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
            <h2>Post Item ID: { id }</h2><br />
            <table>
                <thead>
                    <th>UserId</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </thead>
                <tbody>
                    {post && (
                        <tr>
                            <td>{ post.userId }</td>
                            <td>{ post.id }</td>
                            <td>{ post.title }</td>
                            <td>{ post.body }</td>
                        </tr>
                    )}
                </tbody>
            </table>
            
        </>
    )
}

export default Item;