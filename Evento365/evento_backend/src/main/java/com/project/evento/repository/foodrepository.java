package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.evento.model.food;


@Repository
public interface foodrepository extends JpaRepository<food, Long>{
	
	

}
