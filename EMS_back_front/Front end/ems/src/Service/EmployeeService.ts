import axios from 'axios';
const baseUrl = "http://localhost:9090/api/employee";

export const createEmployee = (employee: any) => axios.post(baseUrl, employee);

export const getAllEmployee = () => axios.get(baseUrl);

export const UpadteEmployee = (employeeId: number, employee: any) => axios.put(baseUrl + '/' + employeeId, employee);
export const getEmployeeById = (employeeId: number) => axios.get(baseUrl + '/' + employeeId);
export const deleteEmployee = (employeeId: number) => axios.delete(baseUrl + '/' + employeeId);