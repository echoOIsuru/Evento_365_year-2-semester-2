package com.project.evento.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.RentalItem;
import com.project.evento.model.ItemCart;
import com.project.evento.repository.ItemCartRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class ItemCartController {
	
	@Autowired
	private ItemCartRepository temporaryitemcartrepository;
	
	//get items
	@GetMapping("/temporaryitems")
	public List<ItemCart> getItems(){
		return temporaryitemcartrepository.findAll();
	}
	
	//create item rest api
	@PostMapping("/temporaryitems")
	public ItemCart createTemporaryItem(@RequestBody ItemCart temporaryitem) {
		return temporaryitemcartrepository.save(temporaryitem);
	}
	
	//remove items rest API
	@DeleteMapping("/temporaryitems/{rentalitemid}")
	public ResponseEntity<Map<String, Boolean>> removeItem(@PathVariable int rentalitemid){
		ItemCart temporaryitemcart = temporaryitemcartrepository.findById(rentalitemid)
				.orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + rentalitemid));
		
		temporaryitemcartrepository.delete(temporaryitemcart);
		Map<String, Boolean> response = new HashMap<>(); 
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
