package com.project.evento.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.bookFood;

import com.project.evento.repository.bookFoodRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class bookFoodController {

	@Autowired
	private bookFoodRepository bookfoodrepository;
	
	//get all booked foods
	
	@GetMapping("/bookFoods")
	public List<bookFood> getAllBookedFoods(){
	 return bookfoodrepository.findAll();
	 
 }
 
//create book food
	@PostMapping("/bookFoods")
	public bookFood createfoodBooking(@RequestBody bookFood bookfood) {
		return bookfoodrepository.save(bookfood);
	}
	
}
