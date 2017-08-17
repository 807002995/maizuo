import React,{Component} from 'react'
import BrowserRouter from 'react-router-dom'
//样式文件
import Header from '../components/app/Header.js'
export default class App extends Component{
	constructor(){
		super();
		this.state = {
			title: '卖座电影'
		}
	}
	render(){
		return (
			<div class="app">
				<Header HeaderTitle={this.state.title}></Header>
			</div>
		)
	}
	
}
