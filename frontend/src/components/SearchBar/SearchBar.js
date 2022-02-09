import React from "react";
import { useState } from "react";
import './SearchBar.css'

const SearchBar = (props) => {
    // const [searchValue, setSearchValue] = useState('');

    const updateSearchValue = (event) => {
        props.setSearchValue(event.target.value);
    }
    const clearSearchBar = () => {
      props.setSearchValue('');
    }

    return(
        <div>
            <input className = "searchBar" type = "text" placeholder = "Search By Name" value = {props.searchValue} onChange = {updateSearchValue}></input>
            
            {props.searchValue && <button className = "clearButton" onClick={clearSearchBar}>Clear</button>}
        </div>
    )
}

export default SearchBar;