import React from 'react';
//路由重定向
import {Redirect, Link, Route} from 'react-router-dom';
import {views as PostArticle} from '../postArticle/';
import ListArticle from '../listArticle/listArticle';

const Backstage = ({match}) => {
    let http = new XMLHttpRequest(),
        degree;
    http.open("POST","/mengsir",false);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.setRequestHeader('access-token', sessionStorage.token);
    http.send();
    if(http.readyState === 4 && http.status === 200){
        degree = JSON.parse(http.response).tokenHead;
        if(degree === 'undefined'){
            return (
                <Redirect to='/admin' />
            )
        }else{
            return (
                <div className="backstage-box">
                    <ul className="backstage-menu">
                        <li>
                            <Link to={`${match.url}/postarticle`}>编辑文章</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/listarticle`}>文章列表</Link>
                        </li>
                    </ul>
                    <div className="backstage-cunk">
                        <Route exact path={`${match.url}/postarticle`} component={PostArticle} />
                        <Route path={`${match.url}/listarticle`} component={ListArticle} />
                    </div>
                </div>
            )
        }
    }
}

export default Backstage;