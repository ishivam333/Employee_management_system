import { FormEvent, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { UpadteDepartment, creatDepartment, getDepartmentById } from "../Service/DepartmentService";

  
  type RouteParams ={
    id:string;
  }
  
  
const Department: React.FC=()=>{
    const history=useHistory();
    const {id}=useParams<RouteParams>();
    const[departmentName,setdepartmentName]=useState<string>();
    const [departmentDescription,setdepartmentDescription]=useState<string>();

    const saveorupdate=(e:FormEvent)=>{
     e.preventDefault();
     const department={departmentName,departmentDescription}

     if(id){
        UpadteDepartment(Number(id),department)
        .then((response)=>history.push("/department"))
        .catch((error)=>console.log(error))
     }
     else {
        creatDepartment(department)
        .then(()=>history.push("/department"))
        
        .catch((error)=>console.log(error))

     }


    }
    useEffect(()=>{
        if(id){
        getDepartmentById(Number(id))
        .then((response)=>{
            setdepartmentName(response.data.departmentName)
            setdepartmentDescription(response.data.departmentDescription)

        })

 } },[id]
    
    
    
    )

return(
<Container>
<Form>
      <Form.Group className="mb-3">
        <Form.Label>Department Name</Form.Label>
        <Form.Control type="text" placeholder="Department Name" value={departmentName} onChange={(e)=>setdepartmentName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Department description</Form.Label>
        <Form.Control type="text" placeholder="Department description" value={departmentDescription}  onChange={(e)=>setdepartmentDescription(e.target.value)}/>
        </Form.Group>
    </Form>
    <Button onClick={(e)=>saveorupdate(e)} variant="primary">Submit</Button>
    </Container>

);



}

export default Department;