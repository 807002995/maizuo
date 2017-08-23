import API from '../api'
import axios from 'axios'
//详情页
//3828?__t=1503404882449
function getDetailData(id){
    return new Promise((resovle,reject)=>{
        axios.get(API.filmDetail+id+'?__t='+new Date().getTime())
        .then((response)=>{
            let item = response.data.data.film;
            let obj = {};
            obj.name = item.name;
            obj.m = new Date(item.premiereAt).getMonth()+1;
            obj.d = new Date(item.premiereAt).getDate();
            obj.director = item.director;
            obj.imgPath = item.cover.origin;
            obj.nation = item.nation;
            obj.language = item.language;
            obj.synopsis = item.synopsis;
            obj.category = item.category;
            resovle([obj,item.actors]);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
}
export default {
    getDetailData
}