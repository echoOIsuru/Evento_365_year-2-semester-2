package com.project.evento.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.evento.model.Store;



@Repository
public interface StoreRepository extends JpaRepository<Store, Long>{

	
}
