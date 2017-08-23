import API from '../api'
import axios from 'axios'
//page=1&count=7
function getCurData(page,count){
    return new Promise((resolve,reject)=>{
        axios.get(API.FilmCur+"page=" +page+"&count="+count)
        .then((response)=>{
          var newArr = response.data.data.films.map((item,index)=>{
                var obj = {}
                obj.imgPath = item.poster.origin;
                obj.id = item.id;
                obj.grade = item.grade;
                obj.name = item.name;
                obj.intro = item.intro;
                obj.cinemaCount = item.cinemaCount;
                obj.watchCount = item.watchCount;
                return obj;
            })
            resolve(newArr);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
}


function getSoonData(page,count){
    return new Promise((resolve,reject)=>{
        axios.get(API.filmSoon+"page=" +page+"&count="+count)
        .then((response)=>{
          var newArr = response.data.data.films.map((item,index)=>{
                var obj = {}
                obj.imgPath = item.poster.origin;
                obj.id = item.id;
                obj.grade = item.grade;
                obj.name = item.name;
                obj.intro = item.intro;
                obj.m = new Date(item.premiereAt).getMonth()+1;
                obj.d = new Date(item.premiereAt).getDate();
                obj.day = new Date(item.premiereAt).getDay();
                return obj;
            })
            resolve(newArr);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
}



export default {
    getCurData,
    getSoonData
}