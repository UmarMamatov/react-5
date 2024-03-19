    import {types} from "./types";

    const initialState = {
        value1: '',
        value2: '',
        results :[]
    }

    export default function calculatorReducer (state=initialState, action){
        if (action.type===types.INPUT1_VALUE){
            return {...state, value1: action.payload}
        }
        else if (action.type===types.INPUT2_VALUE){
            return {...state, value2: action.payload}
        }
        else if (action.type===types.PLUS){
            if (!state.value1 || !state.value2) {
                alert("Заполните все поля!");
                return state;
            }
            return {...state, results: [...state.results, action.payload]}
        }
        else if (action.type===types.MINUS){
            if (!state.value1 || !state.value2) {
                alert("Заполните все поля!");
                return state;
            }
            return {...state, results: [...state.results, action.payload]}
        }
        else if (action.type===types.MULTIPLY){
            if (!state.value1 || !state.value2) {
                alert("Заполните все поля!");
                return state;
            }
            return {...state, results: [...state.results, action.payload]}
        }
        else if (action.type===types.DIVISOR){
            if (!state.value1 || !state.value2) {
                alert("Заполните все поля!");
                return state;
            }
            return {...state, results: [...state.results, action.payload]}
        }



        return state
    }