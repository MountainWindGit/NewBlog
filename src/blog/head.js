import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/blog-logo.png';

const Head = () => (
    <header className="blog-head">
        <img src={logo} className="logo"/>
        <ul className="blog-nav">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于我</Link></li>
            <li><Link to="/blog">博客</Link></li>
        </ul>
    </header>
)

export default Head;