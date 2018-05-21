import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {actions as BlogActions} from '../list/'

//文章分类
class Genre extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.props.onTabGain();
    }
    handleClick(e){
        let field = e.target.className;
        this.props.onHandleClick(field);
    }
    render(){
        const {tab} = this.props;
        return (
            <div className="genre-box">
                <h3 className="caption">文章类别</h3>
                <ul className="genre-list">
                    {
                        tab.map(item => {
                            return (
                                <li className={item.labels} key={item.labels} onClick={this.handleClick}>
                                    {item.labels}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tab: state.tab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //发送点击字段更新请求连接
        onHandleClick : (label) => {
            dispatch(BlogActions.artGain(label));
        },
        onTabGain: () => {
            dispatch(actions.artGainTab());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);