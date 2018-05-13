import React from 'react';
import {Motion, spring} from 'react-motion';

//头像简介
const HeadPor = () => (
    <div className="head-por"></div>
)

//个人简介
const Info = () => (
    <div className="info-me">
        <p className="info-title"><span>王蒙</span>|<span>web前端</span>|<span>23岁</span>|<span>Email: wangmengdesign@yeah.net</span></p>
        <p className="info-link">Github</p>
        <p className="info-intro">爱前端，爱设计，希望成为全栈工程师。秉承少即多的设计理念。</p>
    </div>   
)

//个人技能
const Skills = () => (
    <ul className="skills">
        <li className="html">
            <Motion defaultStyle={{width:0}}
                style={{width: spring(200)}}
            >
                {value => <p className="html-anima" style={{width: value.width}}></p>}
            </Motion>
        </li>
        <li className="javascript">
            <Motion defaultStyle={{width:0}}
                style={{width: spring(250)}}
            >
                {value => <p className="javascript-anima" style={{width: value.width}}></p>}
            </Motion>
        </li>
        <li className="react">
            <Motion defaultStyle={{width:0}}
                style={{width: spring(150)}}
            >
                {value => <p className="react-anima" style={{width: value.width}}></p>}
            </Motion>
        </li>
        <li className="query">
            <Motion defaultStyle={{width:0}}
                style={{width: spring(100)}}
            >
                {value => <p className="query-anima" style={{width: value.width}}></p>}
            </Motion>
        </li>
        <li className="node">
            <Motion defaultStyle={{width:0}}
                style={{width: spring(100)}}
            >
                {value => <p className="node-anima" style={{width: value.width}}></p>}
            </Motion>
        </li>
        <li className="photoshop">
            <Motion defaultStyle={{width:0}}
                style={{width: spring(200)}}
            >
                {value => <p className="photoshop-anima" style={{width: value.width}}></p>}
            </Motion>
        </li>
    </ul>
)

export default () => (
    <div className="container">
        <HeadPor />
        <Info />
        <Skills />
    </div>
)