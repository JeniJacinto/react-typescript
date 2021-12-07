import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <a href="/" className="navbar-brand">React-Typescript</a>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/posts'} className="nav-link">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/users'} className="nav-link">Users</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;