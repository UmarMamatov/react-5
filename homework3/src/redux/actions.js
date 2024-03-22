import {types} from "./types";
import {useState} from "react";

export function getUserAction(users){
    return{
        type: types.USER,
        payload: users
    }
}

export function fetchUSerAction (){
    return async function (dispatch){
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        dispatch(getUserAction(data))
    }
}



export function getOneUserAction(oneInfo){
    return{
        type: types.ONE_USER,
        payload: oneInfo
    }
}

export function fetchUserOneInfo(id){
    return async function (dispatch){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getOneUserAction(data))
    }
}

