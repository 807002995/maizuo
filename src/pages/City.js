import React,{Component} from 'react';
import service from '../service/cityService.js'
//动画插件
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//全局store
import store from '../store'
import '../css/city.css'

export default class City extends Component{
    constructor({history}){
        super();
        this.state = {
            cityList : [],
            history
        }
    }
    render(){
        let dataList = this.state.cityList.map((item,index)=>{
            var data = [];
            if(item.data.length !=0 ){
                item.data.map((liItem)=>{
                    var li = <li onClick={this.goHome.bind(this,liItem.name)} key={liItem.id}>{liItem.name}</li>
                    data.push(li);
                })
                return <div key={index}>
                            <h3 id={item.title}>{item.title}</h3>
                            <ul>
                                {data}
                            </ul>
                        </div>
            }
        }) 
        let ABC = this.state.cityList.map((item,index)=>{
            return  <li key={index}><a href={"#"+item.title}>{item.title}</a></li> 
        })    
        return (
            <ReactCSSTransitionGroup
						transitionName="slide"
                        transitionAppear={true}
                        transitionAppearTimeout={400}
                        transitionEnter={false}
                        transitionLeave={true}
                        transitionLeaveTimeout={400}>
                <div id='city' class='page'>
                        <h3>热门城市</h3>
                        <ul>
                            <li onClick={this.goHome.bind(this,'北京')}>北京</li>
                            <li onClick={this.goHome.bind(this,'上海')}>上海</li>
                            <li onClick={this.goHome.bind(this,'广州')}>广州</li>
                            <li onClick={this.goHome.bind(this,'深圳')}>深圳</li>
                        </ul>
                         <h3>按字母排序</h3>
                         <ul>
                            {ABC} 
                         </ul>
                        {dataList}
                </div>
			</ReactCSSTransitionGroup>
        )
    }
    componentWillMount(){
        service.getCityData().then((data)=>{
            this.setState({cityList:data});
        })
    }
    goHome(name){
        store.dispatch({
            type: 'changeCityName',
            val : name
        });
        this.state.history.push('/');
    }
}