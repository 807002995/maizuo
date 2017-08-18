import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Header from './components/app/Header.js'
import SliderMenu from './components/app/SliderMenu.js'

import Cinema from './pages/Cinema.js'
import Film from './pages/Film.js'
import Shop from './pages/Shop.js'
import Home from './pages/Home.js'
import Me from './pages/Me.js'
import Card from './pages/Card.js'
import City from './pages/City.js'

export default class App extends Component{
	constructor(){
		super();
		this.state = {
			showMenu:false,
			title: '卖座电影',
			coverStyle : ''
		}
	}
	render(){
		this.state.coverStyle = {display:this.state.showMenu?'block':'none'}
		return (
			<BrowserRouter>
				<div class="app">
					<div class="cover" style={this.state.coverStyle} onClick={this.isShowMenu.bind(this)}></div>
					<Header HeaderTitle={this.state.title} isShow={this.isShowMenu.bind(this)}></Header>
					<Route path='/' render={({history,location})=>{
						return <SliderMenu showMenu={this.state.showMenu}
							headerTitle={this.getTitle.bind(this)}
							isShow={this.isShowMenu.bind(this)}
							pathname={location.pathname}>
						</SliderMenu>
					}}/>
					
					
					<Route path="/" exact component={Home}/>
					<Route path="/film" component={Film}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/me" component={Me}/>
					<Route path="/Card" component={Card}/>
					<Route path="/city" component={City}/>
				</div>
			</BrowserRouter>
		)
	}
	isShowMenu(){
		this.setState({showMenu : !this.state.showMenu});
	}
	getTitle(title){
		this.setState({title:title});
	}
}
