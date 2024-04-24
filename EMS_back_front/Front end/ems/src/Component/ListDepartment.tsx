import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {  getAllDepartment,deleteDepartment} from "../Service/DepartmentService";
import { Button, Table } from "react-bootstrap";


type department = {
    id: number;
    departmentName: string; 
    departmentDescription: string; 
}

const ListDepartment: React.FC = () => {
    const [departments, setDepartments] = useState<department[]>([]);
    const history = useHistory();

    const updateDepartment = (id: number) => {
        history.push(`/edit_department/${id}`); 
    }

    const listAllDepartments=()=>{
        getAllDepartment().then((response) => {
            setDepartments(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }


    const removeDepartment = (id: number) => {
        deleteDepartment(id).then(()=>listAllDepartments())
        .catch((error)=>console.log(error));
    }
    

    useEffect(() =>listAllDepartments(), []);

    return (
        <>
        <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
            <h1>List department</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>DepartmentName</th>
                        <th>DepartmentDescription</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(department =>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departmentDescription}</td>
                                <td>
                                <Button onClick={() => updateDepartment(department.id)} variant="primary">Update</Button>{' '}
                                <Button onClick={() => removeDepartment(department.id)}  variant="danger">Delete</Button>{' '}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    );
}

export default ListDepartment;
