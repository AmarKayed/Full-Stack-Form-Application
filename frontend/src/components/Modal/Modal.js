import React, {useState} from "react";
import './Modal.css'

import Form from '../Form/Form'

const Modal = (props) => {


    const [name, setName] = useState(props.employee.name);
    const [age, setAge] = useState(props.employee.age);
    const [country, setCountry] = useState(props.employee.country);
    const [position, setPosition] = useState(props.employee.position);
    const [wage, setWage] = useState(props.employee.wage);

    const modalDisappear = () => {
        props.setButtonClicked(!props.buttonClicked);
    }

    return (
        <div className = "modalBackground">
            <div className = "modal">
                <button className = "exit" onClick = {modalDisappear}>X</button>
                <div className = "formArea modalFormArea">
            
                    <Form label = "Name" type = "text" state = {name} setState = {setName} />
                    <Form label = "Age" type = "number" state = {age} setState = {setAge} />
                    <Form label = "Country" type = "text" state = {country} setState = {setCountry} />
                    <Form label = "Position" type = "text" state = {position} setState = {setPosition} />
                    <Form label = "Wage(year)" type = "number" state = {wage} setState = {setWage} />
                    
                </div>

                <button className = "updateButton">Update Details</button>

            </div>
        </div>

    )
}

export default Modal;