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
        })
        .catch((err)=>{
            console.log(err);
        })
    })
}
//即将上映homeSoon
//1503309237615&page=1&count=3
function getSoonData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.homeSoon+new Date().getTime()+'page=1&count=3')
        .then((response)=>{
            var arr = response.data.data.films;
                var newArr = arr.map((item)=>{
                var obj = {};
                obj.imgPath = item.cover.origin;
                obj.name = item.name;
                obj.m = new Date(item.premiereAt).getMonth()+1;
                obj.d = new Date(item.premiereAt).getDate();
                return obj;
            })
            console.log(newArr);
            resolve(newArr);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
}

export default{
    getBannerData,
    getHotData,
    getSoonData
}