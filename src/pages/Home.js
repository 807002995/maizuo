import React ,{Component} from 'react'
import service from '../service/homeService.js'

import '../css/home.css'

let bannerSwiper = null;
export default class Home extends Component{
	constructor(){
		super();
		this.state={
			bannerData:[]
		}
	}
	render(){
		var bannerList = this.state.bannerData.map((item)=>{
			return (<div class="swiper-slide" key={item.id}>
				<img src={item.imageUrl} alt={item.name}/>
			</div>)
		})
		return (
			<div class='page'>
				<div ref='banner' class="swiper-container banner">
						<div class="swiper-wrapper">
							{bannerList}
						</div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		//请求banner数据
		service.getBannerData().then((data)=>{
			console.log(data);
			this.setState({bannerData:data});
			bannerSwiper.update();
		})
	}
	componentDidMount(){
		bannerSwiper = new Swiper(this.refs.banner,{

		})
	}
}
