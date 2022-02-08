import React from "react";
import { useState } from "react";
import './DeleteButton.css';
import Axios from "axios";

const DeleteButton = (props) => {

    const [buttonClicked, setButtonClicked] = useState(false);

    const confirmationModal= () => {
        setButtonClicked(!buttonClicked);
    }

    const deleteEmployee = () => {
        console.log(props.employee);
        Axios
            .delete('http://localhost:3001/deleteEmployee', {data: {employee: props.employee}})
            .then((response)=>{
                console.log(response);
            });
        confirmationModal();
    }

    return (
        <div>
            <button className = "deleteButton" onClick={confirmationModal}>x</button>
            
            {
            buttonClicked 
            && 
            <div className="confirmationModal">
                <p>are you sure you want to delete this?</p>
                
                <div className = "confirmationButtons">
                    <button onClick = {deleteEmployee}>yes</button>
                    <button onClick = {confirmationModal}>no</button>
                </div>
            </div>
            }
        </div>
    )

}

export default DeleteButton;
