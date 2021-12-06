import http from '../http.common';
import UserItem from '../types/user';

const getAll = () => {
    return http.get<Array<UserItem>>('/users');
};

const get = (id: any) => {
    return http.get<UserItem>(`/users/${id}`);
};

const UserApi = {
    getAll,
    get
};

export default UserApi;