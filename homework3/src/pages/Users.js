import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOneInfo } from "../redux/actions";
import UserDetails from "./UserDetails";
import {Link} from "react-router-dom";

const Users = ({ userInfo }) => {
    const id = userInfo?.id;


    return (
        <Link style={{color:'black'}} to={`/user/${id}`}>
            <div style={{ width: '250px',padding:'20px', height: '300px', border: '1px solid', display: 'flex', justifyContent: 'center',flexDirection:'column', alignItems:'center' }}>
                <img style={{ width: "100px" }} src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt="userIcon" />
                <div>
                    <h1>{userInfo?.name}</h1>
                    <p>{userInfo?.username}</p>
                    <p>{userInfo?.email}</p>
                </div>
            </div>
        </Link>
    );
};

export default Users;
