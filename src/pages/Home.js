import React ,{Component} from 'react'
import service from '../service/homeService.js'
import store from '../store'

import '../css/home.css'

let bannerSwiper = null;
export default class Home extends Component{
	constructor({history}){
		super();
		this.state={
			bannerData:[],
			hotData:[],
			topClass:'goTop',
			soonData:[],
			history
		}
	}
	render(){
		//banner的dom
		var bannerList = this.state.bannerData.map((item)=>{
			return (<div class="swiper-slide" key={item.id}>
				<img src={item.imageUrl} alt={item.name}/>
			</div>)
		})
		//hot
		var hotList = this.state.hotData.map((item,index)=>{
			return (
				<li key={index} onClick={this.goDetail.bind(this,item.id)}>
					<img src={item.cover.origin} />
					<div class="hotItem">
						<p>{item.name}</p>
						<p>{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
						<span>{item.grade}</span>
					</div>
				</li>
			)
		})
		let soonList = this.state.soonData.map((item,index)=>{
			return (
				<li key={index} onClick={this.goDetail.bind(this,item.id)}>
					<img src={item.imgPath} />
					<div class="soonItem">
						<p>{item.name}</p>
						<span>{item.m}月{item.d}日上映</span>
					</div>
				</li>
			);
		})
		return (
			<div id="home" class='page'>
				<span class={this.state.topClass} onClick={this.goTopJS.bind(this)}>返回顶部</span>
				<div ref='banner' class="swiper-container banner">
						<div class="swiper-wrapper">
							{bannerList}
						</div>
				</div>
				<ul class="hot">
					{hotList}
					<div class="more">更多热映电影</div>
				</ul>
				<ul class="soon">
					<h3>即将上映</h3>
					{soonList}
					<div class="more">更多即将上映电影</div>
				</ul>
			</div>
		)
	}
	componentWillMount(){
		//请求banner数据
		console.log(window.sessionStorage.getItem('bannerData'))
		if(window.sessionStorage.getItem('bannerData') == null ){
			service.getBannerData().then((data)=>{
				this.setState({bannerData:data});
				bannerSwiper.update();
			})
		}else{
			this.setState({bannerData:JSON.parse(window.sessionStorage.getItem('bannerData'))});
		}
		//请求hot数据
		service.getHotData().then((data)=>{
			this.setState({hotData:data});
		});
		//请求soon数据
		service.getSoonData().then((data)=>{
			this.setState({soonData:data});
		});
		store.dispatch({
            type: 'changeHeaderTitle',
            val : '卖座电影'
        });
	}
	
	componentDidMount(){
		bannerSwiper = new Swiper(this.refs.banner,{
		});
		document.body.onscroll = ()=>{
			if(document.body.scrollTop >= 200){
				this.setState({topClass:'goTop '+'goTopActive'})
			}else if(document.body.scrollTop < 200){
				this.setState({topClass:'goTop'})
			}
		}
	}
	goTopJS(){
		document.body.scrollTop = 0;
	}
	goDetail(id){
		this.state.history.push({
			pathname:'/detail',
			query:{
				id
			}
		});
	}
}
