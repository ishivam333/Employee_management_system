import axios from 'axios';
const baseUrl = "http://localhost:9090/api/department";

export const creatDepartment = (department: any) => axios.post(baseUrl, department);

export const getAllDepartment = () => axios.get(baseUrl);

export const UpadteDepartment = (departmentId: number, department: any) => axios.put(baseUrl + '/' + departmentId, department);
export const getDepartmentById = (departmentId: number) => axios.get(baseUrl + '/' + departmentId);
export const deleteDepartment = (departmentId: number) => axios.delete(baseUrl + '/' + departmentId);