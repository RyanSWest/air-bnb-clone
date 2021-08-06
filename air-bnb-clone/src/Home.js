import React from 'react';
import './home.css';
import Banner from './Banner'
import Search from './Search'

function Home() {
    return (
        <div className = "home">
            <h1>AIR BNB HOME </h1>
            <Search/>
            <Banner/>
        </div>
    )
}

export default Home
