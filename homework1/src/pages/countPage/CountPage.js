import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from "./CountPage.module.css";

const CountPage = () => {
    const title = useSelector(state=> state.number)
    const dispatch = useDispatch()
    const plusDigit = ()=>{
        dispatch({
            type: 'PLUS_NUMBER'
        })
    }
    const tenPlusDigit = ()=>{
        dispatch({
            type: 'tenPlusDigit'
        })
    }
    const minusDigit = ()=>{
        dispatch({
            type: 'MINUS_NUMBER'
        })
    }
    const tenMinusDigit = ()=>{
        dispatch({
            type: 'tenMinusDigit'
        })
    }
    const reset = ()=>{
        dispatch({
            type: 'RESET'
        })
    }


    return (
        <>
        <div className={classes.page}>
            <div className={classes.wrapper}>
                <button onClick={minusDigit}>Prev</button>
                <button onClick={tenMinusDigit}>10-Prev</button>
                <h1> {title}</h1>
                <button onClick={plusDigit}>Next</button>
                <button onClick={tenPlusDigit}>10-Next</button>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
        </>

    );
};

export default CountPage;