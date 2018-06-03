import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../list/actions';

class ListArticle extends React.Component{
    constructor(props){
        super(props);
        this.onDeleteArticle = this.onDeleteArticle.bind(this);
    }
    //页面加载完成获取数据
    componentDidMount(){
        this.props.onListArtGain();
    }
    //上传需删除文章的id
    onDeleteArticle(e){
        fetch('/deletework', {
            method: 'POST',
            //设置数据传输形式
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            //数据体
            body: `numid=${e.target.id}`
        }).then(res => {
            if(res.status !== 200){
               throw new Error('无法删除');
            }
            res.json().then(resJson => {
                if(resJson.clear){
                    window.location.reload();
                }
            })
        })
    }
    render(){
        const listData = this.props.listData;
        return (
            <div className="table-box">
                <table cellSpacing="0" className="list-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>标题</th>
                            <th>发布时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listData.reverse().map((item, index) => {
                                return (
                                    <tr key={item.title}>
                                        <td>{index + 1}</td>
                                        <td className="title-left">{item.title}</td>
                                        <td>{item.creat_time}</td>
                                        <td><span id={item.id} className="table-btn" onClick={this.onDeleteArticle}>删除</span></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.article);
    return {
        listData: state.article
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onListArtGain: () => {
            dispatch(Actions.artGain());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListArticle);