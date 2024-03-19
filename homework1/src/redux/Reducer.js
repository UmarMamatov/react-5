
let count = 0

const initialState = {
    number: count
}


export default function reducer(state =initialState,action){

    if (action.type ==='PLUS_NUMBER'){
        return {number: ++count}

    }
    else if (action.type==='tenPlusDigit'){
        return {number: count+=10}
    }
    else if(action.type ==='MINUS_NUMBER'){
        if (count>0){
            return {number: --count}
        }
    }
    else if (action.type === 'tenMinusDigit'){
        if (count>=10){
            return {number: count-=10}
        }
        else if (count>0){
            return {number: --count}
        }
    }
    else if (action.type ==='RESET'){
        count=0
        return {number: count}
    }




    return state
}