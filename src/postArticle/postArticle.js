import React from 'react';
import E from 'wangeditor';

class PostArticle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editorValue: ''
        }
    };
    componentDidMount(){
        const elem = this.refs.editorElem
        const editor = new E(elem)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                editorValue: html
            })
        }
        editor.create();
    }
    render(){
        return (
            <form action="/file_upload" method="post" encType="multipart/form-data">
                <div className="edit-caption">
                    <label>标题: </label>
                    <input type="text" name="title" />
                </div>
                <div className="edit-time">
                    <label>时间: </label>
                    <input type="text" name="creat_time" />
                </div>
                <div className="edit-intro">
                    <label>简介: </label>
                    <textarea name="intro"></textarea>
                </div>
                <div className="edit-content">
                    <div ref="editorElem" style={{textAlign: 'left'}}></div>
                    <textarea name="content" value={this.state.editorValue}></textarea>
                </div>
                <div className="edit-label">
                    <label>标签: </label>
                    <input type="text" name="labels" />
                </div>
                <div className="edit-image">
                    <input type="file" name="image" size="50" />
                </div>
                <button type="submit" className="release">发布文章</button>
            </form>
        )
    }
}

export default PostArticle;