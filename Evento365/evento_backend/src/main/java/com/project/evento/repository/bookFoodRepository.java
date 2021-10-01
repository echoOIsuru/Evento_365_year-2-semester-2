package com.project.evento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.evento.model.bookFood;
import com.project.evento.model.confirmfood;
import com.project.evento.model.food;

@Repository
public interface bookFoodRepository extends JpaRepository<bookFood, Long> {
	
	@Query(value = "select * from food where order_food_id=:value" ,nativeQuery = true)
	public List<food> retrievefood2(@Param("value") Long value);
	
	//get confirm food categories related to the booking id
		@Query(value = "select * from book_foods where booking_id like %:value%" ,nativeQuery = true)
		public List<bookFood> retrieveconfirmfood(@Param("value") String value);
	

}
