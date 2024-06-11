package com.produt_order.product_order.service;

import com.produt_order.product_order.model.ProductModel;
import com.produt_order.product_order.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<ProductModel> getAllProduct(){
        return productRepository.findAll();
    }

    public ProductModel getProductDetail(Integer id){
        try {
            ProductModel product = productRepository.findByProductId(id);
            if(product == null) {
                throw new EntityNotFoundException("Product not found");
            }

            return product;
        } catch (Exception response){
            throw new EntityNotFoundException(response.getMessage());
        }
    }
}
