import React,{Component} from 'react'
import service from '../../service/detailService.js'

import '../../css/detail.css'
export default class Detail extends Component{
    constructor({history,location}){
        super();
        this.state = {
            location,
            history,
            detailData : {}
        }
    }
    render(){
        let item = this.state.detailData;
        console.log(item.actors);
        return (
            <div id="detail" class="page">
                <img src={item.imgPath}/>
                <h2>影片简介</h2>
                <p>导　　演 : {item.director}</p>
                <p>主　　演 : {item.actors1} | {item.actors2} | {item.actors3} | {item.actors4} | {item.actors5}</p>
                <p>地区语言 : {item.nation}({item.language})</p>
                <p>类　　型 : {item.category}</p>
                <p>上映日期 : {item.m}月{item.d}日上映</p>
                <span>{item.synopsis}</span>
                <button>立即购票</button>
            </div>
        )
    }k
    componentWillMount(){
         let id = this.state.location.query.id;
         service.getDetailData(id).then((data)=>{
             this.setState({detailData:data});
         });
    }
}