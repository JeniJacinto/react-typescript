import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import internal from 'stream';
import UserApi from '../../api/user';
import UserItem from '../../types/user';

const Item: React.FC = () => {
    const { id } = useParams();
    const [user, setUser] = useState<UserItem>();
    useEffect(() => {
        getUser(id);
    }, [id]);

    const getUser = (id: string | undefined) => {
        UserApi.get(id)
         .then((response: any) => {
            setUser(response.data);
             console.log(response.data);
         })
         .catch((e: Error) => {
             console.log(e);
         });
    };
    
    return (
        <>
            {user && (
            <div>
                <h2 className="p-2 bg-info text-white text-center">User Item ID: { id }</h2><br />
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Website</th>
                        <th>company</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ user.id }</td>
                            <td>{ user.name }</td>
                            <td>{ user.username }</td>
                            <td>{ user.email }</td>
                            <td>{ user.phone }</td>
                            <td>{ user.address.street + ", " + user.address.city }</td>
                            <td>{ user.website }</td>
                            <td>{ user.company.name }</td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-grid">
                    <a href="/users" className="btn btn-primary btn-block">Return User List</a>
                </div>
            </div>
            )}
        </>
    )
}

export default Item;