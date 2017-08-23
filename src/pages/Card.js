import React ,{Component} from 'react'
import store from '../store'

import '../css/card.css'
export default class Home extends Component{
	constructor(){
		super();
		this.state={
			item:[
				{titel:'卖座卡',className:'active'},
				{titel:'电子卖座卡',className:''}
			]
		}
	}
	render(){
		let li = this.state.item.map((item,index)=>{
			return <li class={item.className} onClick={this.liActive.bind(this,index)} key={index}>{item.titel}</li>
		})
		return (
			<div id="card" class='page'>
				<ul class="navCard">
					{li}
				</ul>
			</div>
		)
	}
	componentWillMount(){
		store.dispatch({
            type: 'changeHeaderTitle',
            val : '查询/绑定/激活卖座卡'
        });
	}
	liActive(index){
		let newItem = this.state.item;
		if(newItem[index].className == ''){
			newItem = [
				{titel:'卖座卡',className:''},
				{titel:'电子卖座卡',className:''}
			]
			newItem[index].className = 'active';
			this.setState({item:newItem})
		}
	}
}
