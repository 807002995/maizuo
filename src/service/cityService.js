import axios from 'axios'
import API from '../api'

function getCityData(){
    return new Promise((resovle,reject)=>{
        axios.get(API.cityData)
        .then((response)=>{
            var data = response.data.data.cities;
            var arr = [];
            for(var i=0; i<26; i++){
                var obj = {};
                obj.title = String.fromCharCode(65+i);
                obj.data = [];
                arr.push(obj);
            }
            data.map((item)=>{
                arr.map((i)=>{
                    if(item.pinyin.charAt(0,1) == i.title){
                        i.data.push(item);
                    }
                })
                
            })
            resovle(arr)
        }).catch((err)=>{
            console.log(err);
        })
    })
}

export default {
    getCityData
}