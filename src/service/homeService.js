import axios from 'axios'
import API from '../api'
//获取banner数据
function getBannerData(){
    return new Promise((resovle,reject)=>{
        axios.get(API.homeBanner)
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

export default{
    getBannerData
}