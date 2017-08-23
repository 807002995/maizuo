import {createStore} from 'redux';

let reducer = function(state,action){
    if(state == null){
        state = {
            cityName : '深圳',
            filmHistory:{},
            headerTitle:'卖座电影'
        };
    }
    if(action.type == 'changeCityName'){
        state.cityName = action.val;
    }
    if(action.type == 'changeHistory'){
        state.filmHistory = action.val
    }
    if(action.type == 'changeHeaderTitle'){
        state.headerTitle = action.val;
    }



    return state;
}

export default createStore(reducer);