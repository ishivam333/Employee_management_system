package com.gl.ems.serviceimplement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.ems.entity.Department;
import com.gl.ems.execption.ResourceNotFound;
import com.gl.ems.resporsity.DepartmentReporsitory;
import com.gl.ems.service.DepartmentService;
@Service
public class DepartmentServiceImpl implements DepartmentService {
    @Autowired
	DepartmentReporsitory depRes;
    
	@Override
	public Department createDepartment(Department emp) {
		depRes.save(emp);
		return emp;
	}

	@Override
	public Department getDepartmentById(long id) {
		Department d=	depRes.findById(id).orElseThrow(()-> new ResourceNotFound("The id which you have given is not found in datbase "+id));
		return d;
	}

	@Override
	public Department updateDepartment(Department dep, long id) {
		Department d=	depRes.findById(id).orElseThrow(()-> new ResourceNotFound("The id which you have given is not found in datbase "+id));
		d.setDepartmentName(dep.getDepartmentName());
		d.setDepartmentDescription(dep.getDepartmentDescription());
		depRes.save(d);
		return d;
	}

	@Override
	public List<Department> getAllDepartment() {
		List<Department> list=depRes.findAll();
		return list;
	}

	@Override
	public void deleteDepartmentById(long id) {
		Department d=	depRes.findById(id).orElseThrow(()-> new ResourceNotFound("The id which you have given is not found in datbase "+id));
		depRes.deleteById(id);
		
	}

}
