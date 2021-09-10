package com.project.evento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.evento.model.Feedback;

import com.project.evento.repository.FeedbackRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class FeedbackController {

	@Autowired
	private FeedbackRepository feedbackRepository;
	
	// get all feedback
	
	@GetMapping("/Feedback")
	public List<Feedback> getAllFeedback(){
		
		return feedbackRepository.findAll();
		
	}
	
	//create employee rest api
	@PostMapping("/Feedback")
	public Feedback creatFeedback(@RequestBody Feedback feedback) {
		
		return feedbackRepository.save(feedback);
		
		
	}

		
		
		
	}
	

