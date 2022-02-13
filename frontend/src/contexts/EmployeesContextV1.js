import { createContext, useState } from "react";
import { Axios } from "axios";

export const EmployeesContext = createContext({});

export const EmployeesProvider = props => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [position, setPosition] = useState('');
    const [wage, setWage] = useState(0);
  
  
    const [employees, setEmployees] = useState([]);



    const addEmployee = () => {
        // console.log(name, age, country, position, wage);
        Axios.post('http://localhost:3001/create', {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage
        }).then(() => {
          console.log("success");
          setEmployees([...employees, 
            {
              name: name,
              age: age,
              country: country,
              position: position,
              wage: wage
            }
          ])
        });
    
      };
    
    
    const getEmployees = () => {
        Axios.get("http://localhost:3001/getEmployees")
            .then((response) => {
            console.log(response.data);
            setEmployees(response.data);
            })
        }
    
    const existEmployees = employees.length === 0 ? false : true;
    
    

    const [searchValue, setSearchValue] = useState('');


    const filteredEmployees = employees.filter((employee) => {return employee.name.includes(searchValue)})



    return (
        <EmployeesContext.Provider value = {{
            name, setName,
            age, setAge,
            country, setCountry,
            position, setPosition,
            wage, setWage,

            employees, setEmployees,

            addEmployee,
            getEmployees,
            
            existEmployees,
            
            searchValue, setSearchValue,
            
            filteredEmployees

        }}>
            {props.children}
        </EmployeesContext.Provider>
    );
}