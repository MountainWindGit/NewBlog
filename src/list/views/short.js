import React from 'react';
import {views as GenreLabel} from '../../tab/';
import Panda from '../../img/panda.gif';

//个人基本信息
const Trends = () => (
    <div className="trends-box">
        <div className="char"><img src={Panda} alt="" /></div>
        <div className="chat"><a href="https://github.com/MengSirGit" className="github" rel="noopener noreferrer" target="_blank">&nbsp;</a><a href="https://weibo.com/5188939752/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1" className="sina-weibo" rel="noopener noreferrer" target="_blank">&nbsp;</a><a href="http://huaban.com/fisd0ke4os/" className="huaban" rel="noopener noreferrer" target="_blank">&nbsp;</a></div>
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