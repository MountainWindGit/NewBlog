import React from 'react';
import {connect} from 'react-redux';
import {actions as Actions} from '../list/';

import Loading from '../img/loading.gif';


function escape(str){
    return str.replace(/<\/script/g,'<\\/script').replace(/<!--/g,'<\\!--');
}

//文章渲染处理
const Oop = ({data}) => {
    if(data.length === 0 || data.length > 1){
        return <div style={{textAlign: 'center', minHeight: '400px'}}><img src={Loading} alt=""/></div>;
    }else{
        return (
        <div className="article-body">
            <h4 className="article-title">{data[0].title}</h4>
            <p className="article-label"><span>时间:{data[0].time}</span><span>类别:{data[0].labels}</span></p>
            <article
            //插入字符串类型的HTML数据
            dangerouslySetInnerHTML={{
                __html: escape(data[0].content)
            }}>
            </article>
        </div>
        )
    }
}

class Details extends React.Component {
    componentWillMount(){
        //当页面刷新时根据路由重新获取数据
        if(this.props.data.length === 0){
            var pathName = window.location.pathname;
            var reg = /\d*$/g;
            var dist = pathName.match(reg)[0]*1;
            this.props.onLoadArt(dist);
        }
    }
    render(){
        return (
            <div>
                <Oop {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.article
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        onLoadArt: id => {
            dispatch(Actions.artGain(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Details);