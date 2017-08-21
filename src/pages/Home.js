import React ,{Component} from 'react'
import service from '../service/homeService.js'

import '../css/home.css'

let bannerSwiper = null;
export default class Home extends Component{
	constructor(){
		super();
		this.state={
			bannerData:[],
			hotData:[],
			topClass:'goTop'
		}
	}
	render(){
		var bannerList = this.state.bannerData.map((item)=>{
			return (<div class="swiper-slide" key={item.id}>
				<img src={item.imageUrl} alt={item.name}/>
			</div>)
		})
		var hotList = this.state.hotData.map((item,index)=>{
			return (
				<li key={index}>
					<img src={item.cover.origin} />
					<div class="hotItem">
						<p>{item.name}</p>
						<p>{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
						<span>{item.grade}</span>
					</div>
				</li>
			)
		})
		return (
			<div id="home" class='page'>
				<span class={this.state.topClass}>返回顶部</span>
				<div ref='banner' class="swiper-container banner">
						<div class="swiper-wrapper">
							{bannerList}
						</div>
				</div>
				<ul class="hot">
					{hotList}
				</ul>
			</div>
		)
	}
	componentWillMount(){
		//请求banner数据
		service.getBannerData().then((data)=>{
			this.setState({bannerData:data});
			bannerSwiper.update();
		})
		//请求hot数据
		service.getHotData().then((data)=>{
			this.setState({hotData:data});
		});
	}
	componentDidMount(){
		bannerSwiper = new Swiper(this.refs.banner,{
		});
		document.body.onscroll = function(){
			if(document.body.scrollTop >= 200){
			}
		}
	}
}
