import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../actions';
import {actions as actionsDist} from '../../detail/';

//发布时间与分类
const CunkLeft = ({labels}) => (
    <div className="cunk-left">
        <div className="thum"></div>
        <div className="label-b">
            <span className="time">2018-05-16</span>
            <span className={`classify ${labels}`}>{labels}</span>
        </div>
    </div>
)
//文章标题简介
class CunkRight extends React.Component {
    render(){
        const {id, title, intro} = this.props;
        // console.log(this.props);
        return(
            <div className="cunk-right">
                <h4 className="caption" id={id} ref="caption"><Link to={{pathname: `/article/${id}`}}>{title}</Link></h4>
                <p className="intro">
                    {intro}
                </p>
            </div>
        )
    }
}
//阅读全文
const Read = () => (
    <a href="" className="read-all">阅读全文</a>
)
//绑定文章数据
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        data: state.article
    }
}
//文章加载事件绑定
const mapDispatchToProps = (dispatch) => {
    return {
        onGain: () => {
            dispatch(actions.artGain());
        },
        onCapitonClick: (id) => {
            dispatch(actionsDist.distID(id));
        }
    }
}
let CunkRightDispatch = connect(null, mapDispatchToProps)(CunkRight);
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
                        return (
                            <li className="list-cunk" key={item.id}>
                                <CunkLeft {...item}/>
                                <CunkRightDispatch {...item}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);