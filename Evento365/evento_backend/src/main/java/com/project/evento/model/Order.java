package com.project.evento.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "orders")

public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Long order_id;
	
	
	@Column(name ="cus_id")
	private int cus_id;
	
	@Column(name = "total")
	private Double total;
	
	@Column(name = "total_items")
	private String total_items;
	
	
	
	public Long getOrder_id() {
		return order_id;
	}

	public void setOrder_id(long order_id) {
		this.order_id = order_id;
	}

	public int getCus_id() {
		return cus_id;
	}

	public void setCus_id(int cus_id) {
		this.cus_id = cus_id;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public String getTotal_items() {
		return total_items;
	}

	public void setTotal_items(String total_items) {
		this.total_items = total_items;
	}

	public Order() {
		
	}
	
	public Order(int cus_id, Double total , String total_items ) {
		super();
		
		this.cus_id = cus_id;
		this.total = total;
		this.total_items = total_items;
		
		
	}
	
	

	

	
	
}
