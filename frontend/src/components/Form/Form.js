import React from "react";
import { useState } from "react";
import './Form.css';

const Form = (props) => {

    return (
        <form className = "Form">
            <label>{props.label}:</label>
            <input type = {props.type}></input>
        </form>
    )

}


export default Form;