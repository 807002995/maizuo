import React ,{Component} from 'react'
import store from '../store'

export default class Home extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div id="card" class='page'>
				
			</div>
		)
	}
	componentWillMount(){
		store.dispatch({
            type: 'changeHeaderTitle',
            val : '查询/绑定/激活卖座卡'
        });
	}
}
