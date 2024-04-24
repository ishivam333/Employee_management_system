package com.gl.ems.resporsity;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gl.ems.entity.Employees;

public interface EmployeesReporsitory extends JpaRepository<Employees, Long> {

}
