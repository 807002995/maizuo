import {createStore} from 'redux';

let reducer = function(state,action){
    if(state == null){
        state = {
            cityName : '深圳'
        };
    }
    if(action.type == 'changeCityName'){
        state.cityName = action.val;
    }




    return state;
}

export default createStore(reducer);