package com.produt_order.product_order.repository;

import com.produt_order.product_order.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Integer> {
    ProductModel findByProductId(Integer productId);
}
