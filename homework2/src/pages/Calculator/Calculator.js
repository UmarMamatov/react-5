import {useDispatch, useSelector} from "react-redux";
import {
    changeInputAction1,
    changeInputAction2,
    divisorNumber,
    minusNumber,
    multiplyNumber,
    plusNumber
} from "../../redux/actions";

const Calculator = () => {
    const {value1, value2, results}= useSelector(state => state.calculatorReducer)


    const dispatch = useDispatch()
    const changeInput1 = (event)=>{
        dispatch(changeInputAction1(event.target.value))
    }
    const changeInput2 = (event)=>{
        dispatch(changeInputAction2(event.target.value))
    }



    const plusNum=()=>{
        dispatch(plusNumber(value1,value2))
    }
    const minusNum=()=>{
        dispatch(minusNumber(value1,value2))
    }
    const multiplyNum=()=>{
        dispatch(multiplyNumber(value1,value2))
    }
    const divisorNum=()=>{
        dispatch(divisorNumber(value1,value2))
    }

    return (
        <div>
            <input value={value1}  onChange={changeInput1} type="number"/>
            <input value={value2}  type="number" onChange={changeInput2}/>
            <button onClick={plusNum}>+</button>
            <button onClick={minusNum}>-</button>
            <button onClick={multiplyNum}>*</button>
            <button onClick={divisorNum}>/</button>
            {results.map((result,idx)=> <p key={idx}>{result}</p>)}
        </div>
    );
};

export default Calculator;