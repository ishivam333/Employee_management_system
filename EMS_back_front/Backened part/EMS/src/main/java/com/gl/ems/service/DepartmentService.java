package com.gl.ems.service;

import java.util.List;

import com.gl.ems.entity.Department;


public interface DepartmentService {

	Department createDepartment(Department emp);
	Department getDepartmentById(long id);
	Department updateDepartment(Department emp,long id);
	List<Department> getAllDepartment();
	void deleteDepartmentById(long id);
	
	
	
	
	
	

}
