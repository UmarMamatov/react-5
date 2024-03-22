import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchUserOneInfo } from "../redux/actions";
import {useParams} from "react-router-dom";

const UserDetails = () => {
    const {id} = useParams()

    const dispatch = useDispatch();
    const {oneUser}=useSelector(state => state.UserInfoReducer)
    console.log(oneUser)

    useEffect(() => {
        dispatch(fetchUserOneInfo(id))
    }, [dispatch, id]);

    return (
        <div>
            {oneUser ? (
                <div style={{fontSize:'20px'}}>
                    <h2>User Details</h2>
                    <p><strong>Name:</strong>{oneUser.name}</p>
                    <p><strong>Phone:</strong>{oneUser.phone}</p>
                    <p><strong>Website:</strong>{oneUser.website}</p>
                    <p><strong>Username:</strong> {oneUser.username}</p>
                    <p><strong>Company Name:</strong> {oneUser?.company?.name}</p>
                    <p><strong>Street:</strong> {oneUser?.address?.street}</p>
                    <p><strong>Suite:</strong> {oneUser?.address?.suite}</p>
                    <p><strong>City:</strong> {oneUser?.address?.city}</p>
                    <p><strong>Email:</strong> {oneUser.email}</p>
                    <p><strong>ID:</strong> {oneUser.id}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserDetails;
