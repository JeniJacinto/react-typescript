import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/layouts/header';
import Posts from './components/posts';
import PostItem from './components/posts/item'
import Users from './components/users';
import UserItem from './components/users/item';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="App">
          <Header />
          <main>
            <div className="container mt-3">
              <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:id" element={<PostItem />} />
                <Route path="users" element={<Users />} />
                <Route path="users/:id" element={<UserItem />} />
              </Routes>
            </div>
          </main>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
