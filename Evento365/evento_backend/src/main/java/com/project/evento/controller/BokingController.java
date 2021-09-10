package com.project.evento.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.data.domain.*;
import org.springframework.data.repository.query.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.exception.ResourceNotFoundException;
import com.project.evento.model.Booking;
import com.project.evento.repository.BookingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BokingController {

	@Autowired
	private BookingRepository bookingRepository;
	
	//get all 
	@GetMapping("/bookings")
	public List<Booking> getAllBooking(){
		return bookingRepository.findAll();
	}
	
	//testing
	@GetMapping("/bookings-test")
	public List<Booking> getBooking(){
		return bookingRepository.ggwp();
	}
	
	//search
	@GetMapping("/bookings/search")
	public ResponseEntity<List<Booking>> findAllSearch(@RequestParam("id") Long searchText,
			@RequestParam("value") String name){
		List<Booking> booking = bookingRepository.findAllSearchBooking(searchText,name);
		//List<Booking> booking = null;
		return ResponseEntity.ok(booking);
	}
	
	
	//create booking 
	@PostMapping("/bookings")
	public Booking createBooking(@RequestBody Booking booking) {
		return bookingRepository.save(booking);
	}
	


	//get booking by id rest API
	@GetMapping("/bookings/{id}")
	public ResponseEntity<Booking> getBookingByID(@PathVariable Long id) {
		Booking booking = bookingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cannot found booking : "+id));
		return ResponseEntity.ok(booking);
	}
	
	//update booking rest API
	@PutMapping("/bookings/{id}")
	public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking bookingDe){
		Booking booking = bookingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cannot found booking : "+id));
		
		booking.setBooking_date(bookingDe.getBooking_date());
		//booking.setDate(bookingDe.getDate());
		booking.setEvent_type(bookingDe.getEvent_type());
		booking.setGusts(bookingDe.getGusts());
		booking.setLocation_id(bookingDe.getLocation_id());
		//booking.setTotal(bookingDe.getTotal());
		booking.setStatus(bookingDe.getStatus());
		
		Booking updateBooking = bookingRepository.save(booking);
		return ResponseEntity.ok(updateBooking);
	}
	
	//delete booking rest API
	@DeleteMapping("/bookings/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBooking(@PathVariable Long id){
		Booking booking = bookingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cannot found booking : "+id));
		
		bookingRepository.delete(booking);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
}