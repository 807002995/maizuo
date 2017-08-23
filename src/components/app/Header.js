import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

import store from '../../store'
export default class Header extends Component{
	constructor(){
		super();
		this.state = {
			headerTitle: store.getState().headerTitle,
			cityName : store.getState().cityName,
			history
		}
	}
	render(){
		return(
			<nav class="header-nav">
				<span class="iconfont icon-menu border-right-1px-999" onClick={this.isShowMenu.bind(this)}></span>
				<p class="title">{this.state.headerTitle}</p>
				<p class="iconfont icon-person"><Link to='/me'></Link></p>
				<p class="city">
					<Link to='/city'>
						{this.state.cityName}<span class="iconfont icon-arrow-down"></span>
					</Link>
				</p>
			</nav>
		)
	}
	isShowMenu(){
		this.props.isShow();
	}
	componentWillMount(){
		store.subscribe(()=>{
			this.setState({cityName:store.getState().cityName});
			this.setState({headerTitle:store.getState().headerTitle});
		})
	}
}
