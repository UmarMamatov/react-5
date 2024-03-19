import {types} from "./types";

export function changeInputAction1(value1){
    return{
        type: types.INPUT1_VALUE,
        payload: value1
    }
}
export function changeInputAction2(value2){
    return{
        type: types.INPUT2_VALUE,
        payload: value2
    }
}


export function plusNumber (val1,val2){
    return{
        type: types.PLUS,
        payload:parseFloat(val1)+parseFloat(val2)
    }
}
export function minusNumber (val1,val2){
    return{
        type: types.MINUS,
        payload:parseFloat(val1)-parseFloat(val2)
    }
}

export function multiplyNumber (val1,val2){
    return{
        type: types.MULTIPLY,
        payload:parseFloat(val1)*parseFloat(val2)
    }
}
export function divisorNumber (val1,val2){
    return{
        type: types.DIVISOR,
        payload:parseFloat(val1)/parseFloat(val2)
    }
}