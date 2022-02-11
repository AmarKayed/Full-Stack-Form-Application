import React, {useState} from 'react';
import './EditButton.css'
import Modal from '../Modal/Modal';
const EditButton = () => {

    const [buttonClicked, setButtonClicked] = useState(false);

    const modalAppear = () => {
        setButtonClicked(!buttonClicked);
    }

    return(
    <div className = "editButton">
        <button onClick = {modalAppear}>Edit</button>
        {buttonClicked && <Modal />}
    </div>
        
    )
} 

export default EditButton;