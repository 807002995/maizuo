import React , {Component} from 'react'
import service from '../../service/filmService.js'
import store from '../../store'
export default class FilmCur extends Component{
    constructor(){
        super();
        this.state = {
            his:store.getState().filmHistory,
            curData : [],
            topClass:'goTop',
            page:1,
            count:7
        }
    }
    render(){
        let cur = this.state.curData.map((item,index)=>{
            return(
                <li key={index} onClick={this.goDetail.bind(this,item.id)}>
                    <img src={item.imgPath}/>
                    <div class="curItem">
                        <p>{item.name}</p>
                        <p>{item.intro}</p>
                        <p><span>{item.cinemaCount}</span>家影院上映 &nbsp;<span>{item.watchCount}</span>人购票</p>
                        <p>{item.grade} <span> &gt;</span></p>
                    </div>
                </li>
            )
        })
        return <ul class="curPage">
            <span class={this.state.topClass} onClick={this.goTopJS.bind(this)}>返回顶部</span>
            {cur}
        </ul>
    }
    componentWillMount(){
        service.getCurData(this.state.page,this.state.count).then((data)=>{
            this.setState({curData:data});
        });
        store.subscribe(()=>{
            this.setState({his : store.getState().filmHistory });
		})
    }
    //100+128
    componentDidMount(){
         var isTrue = true;
        document.body.onscroll = ()=>{
            let ulElHeight = document.documentElement.getElementsByClassName("curPage")[0].offsetHeight;
            let bodyHeight = document.body.offsetHeight;
            let bodyTop = document.body.scrollTop;            
			if(document.body.scrollTop >= 200){
				this.setState({topClass:'goTop '+'goTopActive'})
			}else if(document.body.scrollTop < 200){
				this.setState({topClass:'goTop'})
            }
            //下拉加载
            document.body.scrollTop
            if(isTrue){
                if(bodyTop >= ulElHeight * (this.state.page-1) + 228 ){
                    console.log(isTrue);
                    this.setState({page:this.state.page+1})
                    service.getCurData(this.state.page,this.state.count).then((data)=>{
                        console.log(data.length);
                        if(!data.length == 0){
                            var arr = this.state.curData;
                            data.map((item,index)=>{
                                arr.push(item);
                            })
                            this.setState({curData:arr});
                        }else{
                            isTrue = false;
                        }
                    })
                }

            }

        }
        
    }
	goTopJS(){
		document.body.scrollTop = 0;
    }
    goDetail(id){
        console.log(this.state.his);
		this.state.his.history.push({
			pathname:'/detail',
			query:{
				id
			}
		});
	}
}