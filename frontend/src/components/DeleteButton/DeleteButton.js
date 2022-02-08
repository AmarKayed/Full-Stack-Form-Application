import React, { useState } from "react";
import { useEffect } from "react";
import './DeleteButton.css';

const DeleteButton = () => {

    const [buttonClicked, setButtonClicked] = useState(false);

    const deleteEmployee = () => {
        setButtonClicked(true);
    }

    return (
        <div className = "deleteButton">
            <span onClick={deleteEmployee}>x</span>
            <div className="confirmationModal">
                <p>are you sure you want to delete this?</p>
                <button>yes</button>
                <button>no</button>
            </div>
        </div>
    )

}

export default DeleteButton;
