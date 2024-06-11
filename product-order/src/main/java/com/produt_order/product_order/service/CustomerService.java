package com.produt_order.product_order.service;

import com.produt_order.product_order.model.CustomerModel;
import com.produt_order.product_order.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public List<CustomerModel> getAllCustomer(){
        return customerRepository.findAll();
    }
}
