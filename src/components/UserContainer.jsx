import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/Users/usersAction';
import { getUser } from '../redux/SetUsers/setUserAction';

function UserContainer() {
    const usersData = useSelector(state => state.users.users);
    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        getRandomUser();
    }, [])

    const getRandomUser = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=30');
            const userData_ = response.data.results;
            dispatch(getUsers(userData_))
        } catch (error) {
            console.error(error);
        }
    };

    function setUser(data) {
        dispatch(getUser(data))
    }

    console.log(userData);

    return (
        <div style={{ marginTop: '50px', borderBottom: "10px solid red" }}>
            {userData ?
                <div>
                    <p>{userData.name.title}. {userData.name.first} {userData.name.last}</p>
                </div> :
                <div></div>
            }

            {usersData.map((user, index) => {
                return (
                    <div onClick={() => setUser(user)} key={index}>
                        <img src={user.picture.large} alt="profileImage" />
                        <p>{user.name.title}. {user.name.first} {user.name.last}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default UserContainer