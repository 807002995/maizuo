import React ,{Component} from 'react'

export default class Header extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<nav class="header-nav">
				<span class="iconfont icon-menu border-right-1px-999"></span>
				<p class="title">{this.props.HeaderTitle}</p>
				<p class="city">深圳<span class="iconfont icon-arrow-down"></span></p>
			</nav>
		)
	}
}
