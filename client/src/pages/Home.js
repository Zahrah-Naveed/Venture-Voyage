import React from 'react';
import BottomNav from '../components/BottomNav';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import Notification from '../components/Notification';
import Rooms from '../components/rooms/Rooms';
import Login from '../components/user/Login';

const Home = () => {
    return (
        <>
            <Loading />
            <Notification />
            <Login />
            <NavBar />
            <BottomNav />
            <Rooms />
        </>
    );
};

export default Home;
