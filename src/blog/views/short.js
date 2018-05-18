import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions';

//文章分类
class Genre extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let field = e.target.className;
        this.props.onHandleClick(field);
    }
    render(){
        return (
            <div className="genre-box">
                <h3 className="caption">文章类别</h3>
                <ul className="genre-list">
                    <li className="PS4" onClick={this.handleClick}>PS4</li>
                    <li className="javascript" onClick={this.handleClick}>Javascript</li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //发送点击字段更新请求连接
        onHandleClick : (label) => {
            dispatch(Actions.artGain(label));
        }
    }
}

let GenreLabel = connect(null, mapDispatchToProps)(Genre);

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