package com.gl.ems.serviceimplement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.ems.entity.Employees;
import com.gl.ems.execption.ResourceNotFound;
import com.gl.ems.resporsity.EmployeesReporsitory;
import com.gl.ems.service.EmployeeService;

import lombok.Setter;
@Service
public class EmployeeServiceImpl implements EmployeeService {
     @Autowired
	EmployeesReporsitory empRes;
	@Override
	public Employees createEmployee(Employees emp) {
		empRes.save(emp);
		return emp;
	}

	@Override
	public Employees getEmployeeById(long id) {
		Employees e=empRes.findById(id).orElseThrow(()->new ResourceNotFound("The given id is not present in the database"+id));
		return e;
	}

	@Override
	public Employees updateEmployee(Employees emp, long id) {
		Employees e=empRes.findById(id).orElseThrow(()->new ResourceNotFound("The given id is not present in the database"+id));
		e.setEmailId(emp.getEmailId());
		e.setFirstName(emp.getFirstName());
		e.setLastName(emp.getLastName());
		empRes.save(e);
		
		return e;
	}

	@Override
	public List<Employees> getAllEmployees() {
		List<Employees> li=empRes.findAll();
		return li;
	}

	@Override
	public void deleteEmployeeById(long id) {
		Employees e=empRes.findById(id).orElseThrow(()->new ResourceNotFound("The given id is not present in the database"+id));
		empRes.deleteById(id);
	}

}
