import React from "react";
import { useState } from "react";
import './Form.css';

const Form = (props) => {

    const updateSearchValue = (event) => {
        props.setState(event.target.value);
    }

    return (
        <form className = "Form">
            <label>{props.label}:</label>
            <input type = {props.type} onChange={updateSearchValue} value = {props.state}></input>
        </form>
    )

}


export default Form;