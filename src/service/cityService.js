import axios from 'axios'
import API from '../api'

function getCityData(){
    return new Promise((resovle,reject)=>{
        axios.get(API.cityData)
        .then((response)=>{
            console.log(response.data.data.cities)
            resovle(response.data.data.cities)
        }).catch((err)=>{
            console.log(err);
        })
    })
}

export default {
    getCityData
}