import React,{Component} from 'react'
import service from '../../service/detailService.js'
//全局store
import store from '../../store'
import '../../css/detail.css'
export default class Detail extends Component{
    constructor({history,location}){
        super();
        this.state = {
            location,
            history,
            detailData : {},
            nameList:[],
            nameClass:''
        }
    }
    render(){
        let item = this.state.detailData;
        
             let name = this.state.nameList.map((item,index)=>{
                return `${item.name} | `
            })
        
        return (
            <div id="detail" class="page">
                <img src={item.imgPath}/>
                <h2>影片简介</h2>
                <p>导　　演 : {item.director}</p>
                <p class={this.state.nameClass}>主　　演 : {name}</p>
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
            this.setState({detailData:data[0]});
            this.setState({nameList:data[1]});
            if(data[1].length <= 0){
                 this.setState({nameClass:""})
            }else{
                this.setState({nameClass:"hid"})
            }
            let name = data[0].name;
            store.dispatch({
                type: 'changeHeaderTitle',
                val : name
            });
         });
        
        
        
    }
}