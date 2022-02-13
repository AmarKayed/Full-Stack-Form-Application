import React, {useState} from "react";
import './Modal.css'

import Form from '../Form/Form'
import Axios from "axios";

const Modal = (props) => {

    const id = props.employee.id;
    const [name, setName] = useState(props.employee.name);
    const [age, setAge] = useState(props.employee.age);
    const [country, setCountry] = useState(props.employee.country);
    const [position, setPosition] = useState(props.employee.position);
    const [wage, setWage] = useState(props.employee.wage);

    const modalDisappear = () => {
        props.setButtonClicked(!props.buttonClicked);
    }


    const updateEmployee = () => {
        Axios.put('http://localhost:3001/update', {
            id: id,
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage
        }).then((response) => {
            // console.log(response);
            alert("succes!");
        }).catch((err) => {
            console.log(err);
        })
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
                <div className = "updateButton">
                    <button onClick = {updateEmployee}>Update Details</button>
                </div>
                

            </div>
        </div>

    )
}

export default Modal;