package com.gl.ems.service;

import java.util.List;

import com.gl.ems.entity.Employees;

public interface EmployeeService {
	
	Employees createEmployee(Employees emp);
	Employees getEmployeeById(long id);
	Employees updateEmployee(Employees emp,long id);
	List<Employees> getAllEmployees();
	void deleteEmployeeById(long id);
	
	
	
}
