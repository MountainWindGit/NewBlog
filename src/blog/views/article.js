import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

//发布时间与分类
const CunkLeft = ({labels}) => (
    <div className="cunk-left">
        <div className="thum"></div>
        <div className="label-b">
            <span className="time">2018-05-16</span>
            <span className="classify">{labels}</span>
        </div>
    </div>
)
//文章标题简介
const CunkRight = ({title, intro}) => {
    return (
        <div className="cunk-right">
            <h4 className="caption">{title}</h4>
            <p className="intro">
                {intro}
            </p>
        </div>
    )
}
//阅读全文
const Read = () => (
    <a href="" className="read-all">阅读全文</a>
)

class ArticleList extends React.Component {
    componentDidMount(){
        this.props.onGain();
    }
    render(){
        const data = this.props.data;
        return (
            <section className="article-list">
                <ul className="list-con">
                {
                    data.map(item => {
                        console.log(item);
                        return (
                            <li className="list-cunk" key={item.id}>
                                <CunkLeft {...item}/>
                                <CunkRight {...item}/>
                                <Read />
                            </li>
                        )
                    })
                }
                </ul>
            </section>
        )
    }
}
//绑定文章数据
const mapStateToProps = (state) => {
    return {
        data: state.article
    }
}
//文章加载事件绑定
const mapDispatchToProps = (dispatch) => {
    return {
        onGain: () => {
            dispatch(actions.artGain())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);