import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home'
import Posts from './components/posts';
import PostItem from './components/posts/item'
import Users from './components/users';

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
          </Routes>
        </div>
      </React.Fragment>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
