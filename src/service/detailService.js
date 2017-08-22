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
            obj.actors1 = item.actors[0].name;
            obj.actors2 = item.actors[1].name;
            obj.actors3 = item.actors[2].name;
            obj.actors4 = item.actors[3].name;
            obj.actors5 = item.actors[4].name;
            obj.imgPath = item.cover.origin;
            obj.nation = item.nation;
            obj.language = item.language;
            obj.synopsis = item.synopsis;
            obj.category = item.category;
            console.log(obj);
            resovle(obj);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
}
export default {
    getDetailData
}