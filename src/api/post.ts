import http from '../http.common';
import PostItem from '../types/post';

const getAll = () => {
    return http.get<Array<PostItem>>('/posts');
};

const get = (id: any) => {
    return http.get<PostItem>(`/posts/${id}`);
};

const PostApi = {
    getAll,
    get
};

export default PostApi;