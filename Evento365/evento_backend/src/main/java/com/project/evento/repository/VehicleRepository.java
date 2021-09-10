package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.evento.model.Vehicle;
import com.project.evento.model.VehicleRent;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long>{
	@Query(value = "select * from vehicles ve where ve.reg_no not in (select r.reg_no from vehicle_rent r)", nativeQuery = true)
	public List<Vehicle> orderdVehicle();
}
