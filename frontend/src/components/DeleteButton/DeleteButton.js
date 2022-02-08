import React, { useState } from "react";
import { useEffect } from "react";
import './DeleteButton.css';

const DeleteButton = () => {

    const [buttonClicked, setButtonClicked] = useState(false);

    const confirmationModal= () => {
        setButtonClicked(!buttonClicked);
    }

    const deleteEmployee = () => {
        
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
