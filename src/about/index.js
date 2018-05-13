import React from 'react';
import Intro from './intro';
import Menu from './menu';
import './style.css';

const About = () => (
    <div className="intro-flex clearfix">
        <Intro />
        <Menu />
    </div>
)

export default About;