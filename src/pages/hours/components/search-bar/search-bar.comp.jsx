import React from 'react';
import './search-bar.style.css';

const  SearchBar = () => {

return (
    <div className= "search-bar-container"> 
    <div className="search-input">
      <input type="text" placeholder="Search"/>
      </div> 

    <div>
      
    <input type = "checkbox"/> Only show reports with hours mayor que 0
    </div>
    </div>
  );

 }
 
 export default SearchBar;