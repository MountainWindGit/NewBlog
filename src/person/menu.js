import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
    <ul className="menu-fixed">
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/about'>关于我</Link></li>
        <li><Link to='/blog'>博客</Link></li>
        <li><a href="https://github.com/MengSirGit/" target="_blank"  rel="noopener noreferrer">Github</a></li>
    </ul>
)

export default Menu;