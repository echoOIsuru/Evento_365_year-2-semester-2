package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.evento.model.VehicleRent;

@Repository
public interface VehicleRentRepository extends JpaRepository<VehicleRent, Long>{
	
}
