import { useEffect, useState } from "react";
import { deleteEmployee, getAllEmployee } from "../Service/EmployeeService";
import { error } from "console";
import { Button, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

type employee = {
    id: number;
    firstName: String;
    lastName: String;
    emailId: String;

}

const ListEmployee: React.FC = () => {

    const [employees,setemployees]=useState<employee[]>([]);
    const history=useHistory();

    const UpdateEmployee=(id:number)=>{
        history.push(`/edit_employee/${id}`);

    }

const ListAllEmployee=()=>{
     getAllEmployee().then((response)=>{setemployees(response.data)} )
     .catch((error)=>{console.log(error)})

}

const removeEmployee=(id:number)=>{
    deleteEmployee(id).then(()=>ListAllEmployee())
    .catch((error)=>console.log(error))


}

useEffect( ()=>ListAllEmployee(),[]);
    
    
    
    
   

    return (<>
   
   <h1>List employee</h1>
   <Link to='/add-employee' className='btn btn-primary mb-2'>Add </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>EmailId</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       employees.map(employee =>
                            <tr key={employee. id}>
                                <td>{employee. id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                <Button onClick={()=>UpdateEmployee(employee.id)}  variant="primary">Update</Button>{' '}
                                <Button onClick={()=>removeEmployee(employee.id)}  variant="danger">Delete</Button>{' '}


                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    );
}





   



export default ListEmployee;