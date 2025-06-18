import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image || 'https://via.placeholder.com/150'}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price}</p>
                  <p className="card-text text-muted">{product.category}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No products found.</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
