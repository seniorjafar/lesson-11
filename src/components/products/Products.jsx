import React from 'react';
import { useGetProductsQuery } from '../../context/api/productApi';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon
import './Product.scss'

const Products = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  return (
    <div className="products">
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="katalog__card">
            <div className="card__left">
              <h3>{product.name}</h3>
              <p>От {product.price}₽ <FaArrowRight /></p>
            </div>
            <div className="card__right">
              <h3>{product.name}</h3>
              <img src={product.url[1]} alt={product.name} />
              <p>От {product.price}₽ <FaArrowRight /></p>
            </div>
          </div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default Products;
