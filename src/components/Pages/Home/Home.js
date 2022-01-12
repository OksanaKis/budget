import React from 'react';
import '../../Main.css';
import "./Home.css";

const Home = ({show}) => {
    console.log("Home")
    return (
        <div className={show ? 'transform' : 'full'}>Home</div>
    );
};

export default Home;