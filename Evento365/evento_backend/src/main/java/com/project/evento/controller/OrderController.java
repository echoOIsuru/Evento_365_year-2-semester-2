package com.project.evento.controller;
import com.project.evento.model.Order;
import com.project.evento.repository.OrderRepository;
import java.util.List;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.web.bind.annotation.CrossOrigin;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.PostMapping;
 import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

 import com.project.evento.exception.ResourceNotFoundException;
 import org.springframework.web.bind.annotation.PutMapping;
 import org.springframework.http.ResponseEntity;
 import org.springframework.web.bind.annotation.PathVariable;
	
    

	
	
	


	@CrossOrigin(origins = "http://localhost:3000")
	@RestController
	@RequestMapping("/api/v1/")
	public class OrderController {

		@Autowired
		private OrderRepository orderRepository;
		
		
		//get all event items
		@GetMapping("/orders")
		public List<Order>getAllOrder(){
			return orderRepository.findAll();
		}


		//create order
		@PostMapping("/orders")
		public Order createOrder(@RequestBody Order order) {
			return orderRepository.save(order);
		}
		
		
		
		
		
	}
