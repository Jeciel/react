import {SET_CITY} from './../actions' 

export const city = (state = {}, action) =>{
    let regreso;
    switch (action.type) {
        case SET_CITY:
            regreso =  {...state, city: action.payload}
            break;
        default:
            regreso = state;
            break;
    }   

    return regreso;
}