import React, {useState} from 'react';
import './EditButton.css'
import Modal from '../Modal/Modal';
const EditButton = (props) => {

    const [buttonClicked, setButtonClicked] = useState(false);

    const modalAppear = () => {
        setButtonClicked(!buttonClicked);
    }

    return(
    <div className = "editButton">
        <button onClick = {modalAppear}>Edit</button>
        {buttonClicked && <Modal employee = {props.employee} buttonClicked = {buttonClicked} setButtonClicked = {setButtonClicked}/>}
    </div>
        
    )
} 

export default EditButton;