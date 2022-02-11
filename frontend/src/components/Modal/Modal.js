import React from "react";
import './Modal.css'

const Modal = (props) => {

    const modalDisappear = () => {
        props.setButtonClicked(!props.buttonClicked);
    }

    return (
        <div className = "modalBackground">
            <div className = "modal">
                <button className = "exit" onClick = {modalDisappear}>X</button>
                {/* <div className = "formArea">
            
                    <Form label = "Name" type = "text" state = {name} setState = {setName} />
                    <Form label = "Age" type = "number" state = {age} setState = {setAge} />
                    <Form label = "Country" type = "text" state = {country} setState = {setCountry} />
                    <Form label = "Position" type = "text" state = {position} setState = {setPosition} />
                    <Form label = "Wage(year)" type = "number" state = {wage} setState = {setWage} />
                    
                </div> */}
            </div>
        </div>

    )
}

export default Modal;