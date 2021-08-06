import React from 'react';
import FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import './SearchResult.css'

const SearchResult = ({
    img, location, title, description, star, price, total
})=> {
     return (
         <div className = 'searchResult'>
             <img src = {img} alt = ""/>
             <FavoriteBorderIcon className= 'searchResult__heart'/>
             <div
              className='searchResult__infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>___</p>
                <p>{description}</p>

              </div>
              <div
              className='searchResult__infoBottom'>

                  <div className = 'searchResult__stars'>
                      <StarIcon className= 'searchResult__star'/>
                  </div>

                  
              </div>

             


         </div>
     )
 }

 export default SearchResult


