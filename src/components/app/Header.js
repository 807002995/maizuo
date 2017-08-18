import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<nav class="header-nav">
				<span class="iconfont icon-menu border-right-1px-999" onClick={this.isShowMenu.bind(this)}></span>
				<p class="title">{this.props.HeaderTitle}</p>
				<p class="iconfont icon-person"><Link to='/me'></Link></p>
				<p class="city">
					<Link to='/city'>
						深圳<span class="iconfont icon-arrow-down"></span>
					</Link>
				</p>
			</nav>
		)
	}
	isShowMenu(){
		this.props.isShow();
	}
}
