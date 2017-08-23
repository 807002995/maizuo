import React ,{Component} from 'react'
import store from '../store'

export default class Home extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div class='page'>影院</div>
		)
	}
	componentWillMount(){
		store.dispatch({
            type: 'changeHeaderTitle',
            val : '全部影院'
        });
	}
}
