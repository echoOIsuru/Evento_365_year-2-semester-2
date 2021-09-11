/*package com.project.evento.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.evento.model.Store;

public class ItemCategoryController {

		//get items by category name
			@GetMapping("/retrieveStores/{itemcategoryid}")
					public ResponseEntity<List<Store>> findAllSearch(@PathVariable String itemcategoryid){
						List<Store> result= Store.retrieveStores(itemcategoryid);
						return ResponseEntity.ok(result);
					}
		
	
}*/	
	