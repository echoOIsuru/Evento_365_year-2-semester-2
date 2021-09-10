package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.project.evento.model.Payment;

@Repository

public interface PaymentRepository extends JpaRepository<Payment, Long> {
	
	List<Payment> findBycustomerId(String customerId);


}
