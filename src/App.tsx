import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import Posts from './components/posts';
import PostItem from './components/posts/item'
import Users from './components/users';
import UserItem from './components/users/item';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostItem />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserItem />} />
          </Routes>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
