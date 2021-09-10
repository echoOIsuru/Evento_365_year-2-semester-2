package com.project.evento.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.project.evento.model.Promocode;

@Repository

public interface PromoCodeRepository extends JpaRepository<Promocode, Long> {
	
	List<Promocode> findByCode(String code);
	
	


}

