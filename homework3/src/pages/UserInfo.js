import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUSerAction} from "../redux/actions";
import Users from "./Users";

const UserInfo = () => {

    const dispatch = useDispatch()
    const {user} = useSelector(state => state.UserInfoReducer)

    useEffect(() => {
        dispatch(fetchUSerAction())
    }, []);
    return (
        <div style={{display:'flex', flexWrap:'wrap', gap: '10px'}}>
            {user.map(userI=> <Users userInfo={userI}/>)}
        </div>
    );
};

export default UserInfo;