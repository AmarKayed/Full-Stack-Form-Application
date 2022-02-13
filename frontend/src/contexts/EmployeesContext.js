import { createContext } from "react";
import { useState } from "react";

export const EmployeesContext = createContext({});

export const EmployeesProvider = props => {

    const [employees, setEmployees] = useState([])

    return (
        <EmployeesContext.Provider value = {{employees, setEmployees}}>
            {props.children}
        </EmployeesContext.Provider>
    );
}
