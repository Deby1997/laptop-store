import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <div className='link-container'>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                        to='/home'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                        to='/reviews'
                    >
                        Reviews
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                        to='/dashboard'
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                        to='/blogs'
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                        to='/about'
                    >
                        About
                    </NavLink>
                </div>
            </nav >
        </div >
    );
};

export default Header;