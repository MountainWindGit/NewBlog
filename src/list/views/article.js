import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions';

//发布时间与分类
const CunkLeft = ({creat_time, labels, img_name}) => {
    //当传入的图片等于undefined时则不添加img标签
    let img;
    if(img_name !== 'undefined'){
        img = <img src={`/upload/${img_name}`} alt='' />;
    }
    return  (
        <div className="cunk-left">
            <div className="thum">{img}</div>
            <div className="label-b">
                <span className="time">{creat_time}</span>
                <span className={`classify ${labels}`}>{labels}</span>
            </div>
        </div>
    )
}
//记录当前点击文章的ID
let skip = 0;
//文章标题简介
class CunkRight extends React.Component {
    render(){
        const {title, intro} = this.props;
        return(
            <div className="cunk-right">
                <h4 className="caption">{title}</h4>
                <p className="intro">
                    {intro}
                </p>
            </div>
        )
    }
}
//阅读全文
const Read = ({id}) => (
    <p onClick={() => {skip = id}}><Link to={{pathname: `/article/${id}`}} className="read-all">阅读全文</Link></p>
)
//绑定文章数据
const mapStateToProps = (state) => {
    return {
        data: state.article
    }
}
//文章加载事件绑定
const mapDispatchToProps = (dispatch) => {
    return {
        onGain: (id) => {
            dispatch(actions.artGain(id));
        }
    }
}
let CunkRightDispatch = connect(null, mapDispatchToProps)(CunkRight);
class ArticleList extends React.Component {
    //列表页加载完成获取数据
    componentDidMount(){
        this.props.onGain();
    }
    //组件卸载请求点击文章数据，存入store
    componentWillUnmount(){
        this.props.onGain(skip);
    }
    render(){
        const data = this.props.data;
        return (
            <section className="article-list">
                <ul className="list-con">
                {
                    data.map(item => {
                        return (
                            <li className="list-cunk" key={item.id}>
                                <CunkLeft {...item}/>
                                <CunkRightDispatch {...item}/>
                                <Read {...item}/>
                            </li>
                        )
                    })
                }
                </ul>
            </section>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);