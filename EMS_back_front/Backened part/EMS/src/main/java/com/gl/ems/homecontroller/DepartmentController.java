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

import com.gl.ems.entity.Department;
import com.gl.ems.serviceimplement.DepartmentServiceImpl;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/department")
public class DepartmentController {
	@Autowired
	DepartmentServiceImpl ds;

	@PostMapping
	ResponseEntity<Department> createDepartment(@RequestBody Department dep) {
		Department d = ds.createDepartment(dep);
		return new ResponseEntity<>(d, HttpStatus.CREATED);
	}

	@GetMapping("{id}")
	ResponseEntity<Department> getDepartmentById(@PathVariable("id") long id) {
		Department d = ds.getDepartmentById(id);
		return new ResponseEntity<>(d, HttpStatus.OK);
	}

	@GetMapping
	ResponseEntity<List<Department>> getAllDepartment() {
		List<Department> d = ds.getAllDepartment();
		return new ResponseEntity<>(d, HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	ResponseEntity<Department> deletDepartment(@PathVariable("id") long id) {
		ds.deleteDepartmentById(id);
		return new ResponseEntity("Deleted successful", HttpStatus.OK);
	}

	@PutMapping("{id}")
	ResponseEntity<Department> updateDepartmentById(@PathVariable("id") long id, @RequestBody Department dep) {
		Department d = ds.updateDepartment(dep, id);

		return new ResponseEntity<>(d, HttpStatus.OK);

	}

}
