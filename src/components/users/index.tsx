//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import UserApi from '../../api/user';
import UserItem from '../../types/user';

const Users: React.FC = () => {
    const [users, setUsers] = useState<Array<UserItem>>([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        UserApi.getAll()
         .then((response: any) => {
            setUsers(response.data);
         })
         .catch((e: Error) => {
             console.log(e);
         });
    };

    return (
        <>
            {users.length ? (
                <div>
                    <h1>User List</h1><a href="/">Return</a>
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Detail</th>
                        </thead>
                        <tbody>
                            { users.map((user, index) => (
                                <tr key={index}>
                                    <td>{ user.id }</td>
                                    <td>{ user.name }</td>
                                    <td>{ user.username }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.phone }</td>
                                    <td><a href={`/users/${user.id}`}>Detail</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ):<></>}
        </>
    )
};

export default Users;