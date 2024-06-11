package com.produt_order.product_order.controller;

import com.produt_order.product_order.model.CustomerModel;
import com.produt_order.product_order.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer-management")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/customers")
    public ResponseEntity<List<CustomerModel>> getAllCustomer(){
        return ResponseEntity.ok(customerService.getAllCustomer());
    }
}
