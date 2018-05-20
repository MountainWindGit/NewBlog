import React from 'react';
import {connect} from 'react-redux';
import {actions as Actions} from '../../blog/';

class Details extends React.Component {
    componentWillMount(){
        // console.log(this.props.onLoadArt)
        var pathName = window.location.pathname;
        var reg = /\d*$/g;
        var dist = pathName.match(reg)[0]*1;
        this.props.onLoadArt(dist);
    }
    render(){
        return (
            <div>这是文章页</div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.article);
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