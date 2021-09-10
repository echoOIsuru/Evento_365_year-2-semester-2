package com.project.evento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.evento.model.ItemCart;

@Repository
public interface ItemCartRepository extends JpaRepository<ItemCart, Integer>{

}
