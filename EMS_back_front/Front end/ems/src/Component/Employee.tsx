import { FormEvent, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { UpadteEmployee, createEmployee, getEmployeeById } from "../Service/EmployeeService";

type Rp={
    id:string;
}

const Employee: React.FC=()=>{
    const history=useHistory();
    const {id}=useParams<Rp>();
    
    const [firstName,setfirstName]=useState<string>();

    const [lastName,setlastName]=useState<string>();
    const [emailId,setemailId]=useState<string>();

 const saveorupdate=(e:FormEvent)=>{
    e.preventDefault();

const employee={firstName,lastName,emailId}


if(id){
    UpadteEmployee (Number(id),employee) 
.then(()=>history.push("/employee"))
.catch((error)=>console.log(error))
}else{
    createEmployee(employee)
    .then(()=>history.push("/employee"))
    .catch((error)=>console.log(error))
}

 }
  
 useEffect(()=>{
if(id){
    getEmployeeById(Number(id))
    .then((response)=>{
        setfirstName(response.data.firstName)
        setlastName(response.data.lastName)
        setemailId(response.data.emailId)


    })
    .catch((error)=>console.log(error))

}

 },[id])

 


    return(
    
        <Container>
        <Form>
              <Form.Group className="mb-3">
                <Form.Label>firstName</Form.Label>
                <Form.Control type="text" placeholder="First Name" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>lastName</Form.Label>
                <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>emailId</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={emailId}  onChange={(e)=>setemailId(e.target.value)}/>
                </Form.Group>
            </Form>
            <Button onClick={(e)=>saveorupdate(e)} variant="primary">Submit</Button>
            </Container>
        
    
    
    );
    
    
    
    
    
    }

    export default Employee;