import React from "react";
import { useState } from "react";
import './SearchBar.css'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    const updateSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <input type = "text" placeholder = "Search By Name" value = {searchValue} onChange = {updateSearchValue}></input>
    )
}

export default SearchBar;