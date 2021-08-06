import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Avatar} from '@material-ui/core';
 

function Header() {
    return (
        <div className = "header">
           
            <img 
            className= 'header__icon'
            src = "https://tse1.mm.bing.net/th?id=OIP.grKW5-9pPgu3LEyYaqTJzgHaBn&pid=Api&P=0&w=444&h=97"
            />

            <div className = 'header__center'>
                <form>
                    <input  />

                </form>
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
