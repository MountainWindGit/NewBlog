import React from 'react';

//暂时使用傻瓜组件调整布局

const CunkLeft = () => (
    <div className="cunk-left">
        <div className="thum"></div>
        <div className="label-b">
            <span className="time">2018-05-16</span>
            <span className="classify">Javascript</span>
        </div>
    </div>
)

const CunkRight = () => (
    <div className="cunk-right">
        <h4 className="caption">jQuery Mobile 方向改变事件</h4>
        <p className="intro">
        由于方向改变（orientationchange）事件绑定到 window 对象，我们可以使用
        window.orientation 属性来设置不同的样式，以便区分纵向和横向的视图,事件
        绑定到 window 对象，我们可以...
        </p>
    </div>
)

const Read = () => (
    <a href="" className="read-all">阅读全文</a>
)

const ArticleList = () => (
    <section className="article-list">
        <ul className="list-con">
            <li className="list-cunk">
                <CunkLeft />
                <CunkRight />
                <Read />
            </li>
        </ul>
    </section>
)

export default ArticleList;