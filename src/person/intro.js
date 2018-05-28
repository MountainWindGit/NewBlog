import React from 'react';
import {Motion, spring} from 'react-motion';
import Self from '../img/self.gif';

//头像简介
const HeadPor = () => (
    <div className="head-por"><img src={Self} alt="" /></div>
)

//个人简介
const Info = () => (
    <div className="info-me">
        <p className="info-title"><span>王蒙</span>|<span>web前端 & 设计</span>|<span>{new Date().getFullYear() - 1995}岁</span>|<span>Email: wangmengdesign@yeah.net</span></p>
        <p className="info-intro">爱前端，爱设计，致力成为一名全栈工程师。_(:3」∠)_</p>
    </div>   
)

//个人技能
const Skills = () => (
    <div className="skill-show">
        <h3 className="caption">技能 & skills</h3>
        <ul className="skills">
            <li className="html">
                <Motion defaultStyle={{width:0}}
                    style={{width: spring(420)}}
                >
                    {value => <p className="html-anima" style={{width: value.width}}></p>}
                </Motion>
            </li>
            <li className="javascript">
                <Motion defaultStyle={{width:0}}
                    style={{width: spring(390)}}
                >
                    {value => <p className="javascript-anima" style={{width: value.width}}></p>}
                </Motion>
            </li>
            <li className="react">
                <Motion defaultStyle={{width:0}}
                    style={{width: spring(310)}}
                >
                    {value => <p className="react-anima" style={{width: value.width}}></p>}
                </Motion>
            </li>
            <li className="query">
                <Motion defaultStyle={{width:0}}
                    style={{width: spring(325)}}
                >
                    {value => <p className="query-anima" style={{width: value.width}}></p>}
                </Motion>
            </li>
            <li className="node">
                <Motion defaultStyle={{width:0}}
                    style={{width: spring(135)}}
                >
                    {value => <p className="node-anima" style={{width: value.width}}></p>}
                </Motion>
            </li>
            <li className="photoshop">
                <Motion defaultStyle={{width:0}}
                    style={{width: spring(410)}}
                >
                    {value => <p className="photoshop-anima" style={{width: value.width}}></p>}
                </Motion>
            </li>
        </ul>
    </div>
)

//工作经历
const Work = () => (
    <div className="work-experience">
        <h3 className="caption">工作经历 & experience</h3>
        <div className="minute">
            <h5 className="work-time">2016.08&nbsp;-&nbsp;&nbsp;2018.01</h5>
            <p className="company">南京苏迪科技有限公司</p>
            <p className="job">web前端设计</p>
            <p className="describe">期间负责公司业务产品的前端工作，根据业务需求编写代码，主要技术为前端三件套，数据交互比较常用Ajax和Fetch;
                参与过部分业务的设计工作; 完成的项目有包括：浙江大学、南京大学、南京航空航天大学、东南大学、同济大学等多
                所高校的网站开发。</p>
        </div>
    </div>
)

//教育经历
const Edu = () => (
    <div className="edu-experience">
        <h3 className="caption">教育经历 & experience</h3>
        <div className="minute">
            <h5 className="work-time">2013.09&nbsp;-&nbsp;&nbsp;2016.07</h5>
            <p className="school"><span>威海职业学院</span><span style={{paddingLeft: '15px',color: '#8d8d8d', fontSize: '12px'}}>建筑电气工程技术</span></p>
        </div>
    </div>
)

//爱好
const Interests = () => (
    <div className="interests">
        <h3 className="caption">爱好 & interests</h3>
        <p className="enjoy">绘画、口琴、写代码、电子游戏</p>
    </div>
)
export default () => (
    <div className="container">
        <HeadPor />
        <Info />
        <Skills />
        <Work />
        <Edu />
        <Interests />
    </div>
)