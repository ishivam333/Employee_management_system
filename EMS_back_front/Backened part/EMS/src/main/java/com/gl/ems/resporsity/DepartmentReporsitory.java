package com.gl.ems.resporsity;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gl.ems.entity.Department;

public interface DepartmentReporsitory extends JpaRepository<Department, Long>{

}
