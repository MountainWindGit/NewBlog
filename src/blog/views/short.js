import React from 'react';

//文章分类
const Genre = () => (
    <div className="genre-box">
        <h3 className="caption">文章类别</h3>
        <ul className="genre-list">
            <li className="ps4">PS4</li>
            <li className="javascript">Javascript</li>
        </ul>
    </div>
)
//个人基本信息
const Trends = () => (
    <div className="trends-box">
        <div className="char"></div>
        <div className="chat"><a href="https://github.com/MengSirGit" className="github" rel="noopener noreferrer" target="_blank"></a><a href="https://github.com/MengSirGit" className="sina-weibo" rel="noopener noreferrer" target="_blank"></a><a href="https://github.com/MengSirGit" className="huaban" rel="noopener noreferrer" target="_blank"></a></div>
        <p className="psn">PSN: DirtyPYtrancy</p>
        <p className="email">Email: wangmengdesign@yeah.net</p>
    </div>
)

const ShortCut = () => (
    <section className="short-cut">
        <Genre />
        <Trends />
    </section>
)

export default ShortCut;