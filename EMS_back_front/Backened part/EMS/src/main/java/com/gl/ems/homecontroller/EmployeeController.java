package com.gl.ems.homecontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.ems.entity.Employees;
import com.gl.ems.serviceimplement.EmployeeServiceImpl;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	@Autowired
	EmployeeServiceImpl es;

	@PostMapping
	ResponseEntity<Employees> createDepartment(@RequestBody Employees emp) {
		Employees e = es.createEmployee(emp);
		return new ResponseEntity<>(e, HttpStatus.CREATED);
	}

	@GetMapping("{id}")
	ResponseEntity<Employees> getEmployeeById(@PathVariable("id") long id) {
		Employees e = es.getEmployeeById(id);
		return new ResponseEntity<>(e, HttpStatus.OK);
	}

	@GetMapping
	ResponseEntity<List<Employees>> getAllEmployees() {
		List<Employees> e = es.getAllEmployees();
		return new ResponseEntity<>(e, HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	ResponseEntity<Employees> deletEmployee(@PathVariable("id") long id) {
		es.deleteEmployeeById(id);
		;
		return new ResponseEntity("Deleted successful", HttpStatus.OK);
	}

	@PutMapping("{id}")
	ResponseEntity<Employees> updateEmployeeById(@PathVariable("id") long id, @RequestBody Employees emp) {
		Employees e = es.updateEmployee(emp, id);

		return new ResponseEntity<>(e, HttpStatus.OK);

	}

}
