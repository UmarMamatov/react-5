import {types} from "./types";


const initialState = {
    user:[],
    oneUser: []
}

export default function UserInfoReducer(state=initialState, action){
    switch (action.type){
        case types.USER:
            return{...state,user: action.payload}
        case types.ONE_USER:
            return {...state,oneUser: action.payload}
        default:
            return state;
    }
}