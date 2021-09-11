package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.ItemCart;

@Repository
public interface ItemCartRepository extends JpaRepository<ItemCart, Integer>{

	@Query(value = "select * from item_cart where booking_id =:bookingid",nativeQuery = true)
	public List<ItemCart> retrieveItems(@Param("bookingid") int bookingid);
}
