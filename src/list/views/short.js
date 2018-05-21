import React from 'react';
import {views as GenreLabel} from '../../tab/';

//个人基本信息
const Trends = () => (
    <div className="trends-box">
        <div className="char"></div>
        <div className="chat"><a href="https://github.com/MengSirGit" className="github" rel="noopener noreferrer" target="_blank">&nbsp;</a><a href="https://github.com/MengSirGit" className="sina-weibo" rel="noopener noreferrer" target="_blank">&nbsp;</a><a href="https://github.com/MengSirGit" className="huaban" rel="noopener noreferrer" target="_blank">&nbsp;</a></div>
        <p className="psn">PSN: DirtyPYtrancy</p>
        <p className="email">Email: wangmengdesign@yeah.net</p>
    </div>
)

const ShortCut = () => (
    <section className="short-cut">
        <GenreLabel />
        <Trends />
    </section>
)

export default ShortCut;