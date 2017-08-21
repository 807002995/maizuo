import axios from 'axios'
import API from '../api'
//获取banner数据
function getBannerData(){
    return new Promise((resovle,reject)=>{
        axios.get(API.homeBanner+new Date().getTime())
        .then((response)=>{
            if(response.data.msg=='Mobileif系统异常'){
                getBannerData();
            }
            else{
                resovle(response.data.data.billboards);
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
}
//获取hot数据
//1503305731014&page=1&count=5
function getHotData(){
    return new Promise((resovle,reject)=>{
        axios.get(API.homeHot+new Date().getTime()+"&page=1&count=5")
        .then((response)=>{
            resovle(response.data.data.films);
            console.log(response.data.data.films)
        })
        .catch((err)=>{
            console.log(err);
        })
    })
}
export default{
    getBannerData,
    getHotData
}