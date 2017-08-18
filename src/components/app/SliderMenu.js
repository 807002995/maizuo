import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import data from '../../service/SliderMenuInfo.js'

export default class SliderMenu extends Component{
	constructor(){
		super();
		this.state = {
			dataList : data.homeSliderMenu,
			pagePath:'/'
		}
	}
	render(){
		let showStyle = {transform: this.props.showMenu?'none':'translateX(-101%)'} 
		let dataList = this.props.pathname =='/shop'?data.shopSliderMenu:data.homeSliderMenu;

		let nav = dataList.map((item,index)=>{
			return <div class="menuList border-bottom-1px-999" key={index} onClick={this.goPage.bind(this,item)}>
					<Link to={item.path}>
						{item.name}
						<span class="iconfont icon-arrow-right"></span>
					</Link>
				</div>
		})
		return(
			<div id="slideMenu"  style={showStyle}>
				{nav}
			</div>
		)
	}
	goPage(item){
		this.props.headerTitle(item.header);
		this.props.isShow();
	}
}
