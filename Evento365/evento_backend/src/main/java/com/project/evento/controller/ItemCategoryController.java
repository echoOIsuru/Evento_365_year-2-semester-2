package com.project.evento.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


import com.project.evento.model.Store;
import com.project.evento.repository.ItemCategoryRepository;

public class ItemCategoryController {

		//get items by category name
	@GetMapping("/retrieveStores/{itemcategory}")
					public ResponseEntity<List<Store>> findAllSearch(@PathVariable String itemcategory){
						List<Store> result= ItemCategoryRepository.retrieveStores(itemcategory);
						return ResponseEntity.ok(result);
					}
		
	
}
	