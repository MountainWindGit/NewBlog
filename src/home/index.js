import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

//随机函数
function random(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

//绘制函数
class Draw {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.setCreate();
    }

    //样式初始化
    setCreate(){
        this.x = random(30, this.canvas.width);
        this.y = random(30, this.canvas.height);
        this.r = random(60, 120);
        this.R = random(86, 210);
        this.G = random(86, 210);
        this.B = random(86, 210);
        this.min = 0;
        this.alpha = 1;
    }

    //绘制过程
    createNode(){
        if(this.alpha > 0){
            this.alpha -= 0.003;
        }
        if(this.min < this.r){
            this.min += 0.5;
        }
        this.context.beginPath();
        this.context.fillStyle = `rgba(${this.R},${this.G},${this.B},${this.alpha})`;
        this.context.arc(this.x,this.y,this.min,0,2*Math.PI);
        this.context.fill();
    }
}

let arr = [];

class HomePage extends React.Component {
    componentDidMount(){
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight - 4;
        //逐帧绘制
        function start(){
            window.requestAnimationFrame(start);
            context.clearRect(0, 0, canvas.width, canvas.height);
            arr.map(item => {
                if(item.alpha < 0){
                    arr.shift();
                }
                return item.createNode();
            })
        }
        //逐个添加
        setTimeout(function fn(){
            if(arr.length < 15){
                arr.push(new Draw(canvas, context));
            }
            setTimeout(fn, 800);
        },800)
        start();
    }
    render(){
        return (
           <React.Fragment>
               <nav className="nav-bar">
                    <div className="flex-box">
                        <h2 className="title">less is more</h2>
                        <ul className="nav-ul">
                            <li><Link to='/about'>关于我</Link></li>
                            <li><Link to='/blog'>博客</Link></li>
                            <li><a href="https://github.com/MengSirGit/" target="_blank"  rel="noopener noreferrer">Github</a></li>
                        </ul>
                    </div>
               </nav>
               <canvas id="canvas" ref='canvas'></canvas>
           </React.Fragment>
        )
    }
}

export default HomePage;