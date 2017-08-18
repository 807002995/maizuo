import React,{Component} from 'react';
import service from '../service/cityService.js'
//动画插件
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class City extends Component{
    constructor(){
        super();
        this.state = {
            cityList : []
        }
    }
    render(){
        return (
            <ReactCSSTransitionGroup
						transitionName="slide"
                        transitionAppear={true}
                        transitionAppearTimeout={400}
                        transitionEnter={false}
                        transitionLeave={true}
                        transitionLeaveTimeout={1000}>
                <div id='city' class='page'>城市</div>
			</ReactCSSTransitionGroup>
        )
    }
    componentWillMount(){
        service.getCityData().then((data)=>{
            this.setState({cityList:data});
        })
    }
}