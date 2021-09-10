package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.evento.model.bookFood;

@Repository
public interface bookFoodRepository extends JpaRepository<bookFood, Long> {

}
