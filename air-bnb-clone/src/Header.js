import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Avatar} from '@material-ui/core';
import {Link } from 'react-router-dom';
 

function Header() {
    return (
        <div className = "header">
           
            {/* <img 
            className= 'header__icon'
            src = "https://tse1.mm.bing.net/th?id=OIP.grKW5-9pPgu3LEyYaqTJzgHaBn&pid=Api&P=0&w=444&h=97"
            /> */}
           
           <Link to = '/'> 
           <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />

</Link>
            <div className = 'header__center'>
               
                    <input  />

               
                <SearchIcon/>
            </div>

            <div className ='header__right'>
                <p>Become a host</p>
                 <LanguageIcon/>
                <ExpandMoreIcon/> 
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
