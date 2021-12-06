import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <a href="/posts">Post List</a><br/>
            <a href="/users">User List</a>
        </div>
    );
}

export default Home;