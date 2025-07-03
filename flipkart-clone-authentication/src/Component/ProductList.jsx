import React from 'react';

const ProductList = ({ products }) => {
  return (
    
<div className="container py-5">
  <div className="row g-4">
    {products.length > 0 ? (
      products.map((product) => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
          <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition">
            <div className="position-relative">
              <img
                src={product.image || 'https://via.placeholder.com/150'}
                className="card-img-top p-3 bg-light"
                alt={product.name}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <span
                className="badge bg-warning text-dark position-absolute top-0 end-0 m-2 rounded-pill"
                style={{ fontSize: '0.75rem' }}
              >
                ⭐ {product.rating}
              </span>
            </div>

            <div className="card-body d-flex flex-column">
              <h6 className="fw-semibold text-truncate" title={product.name}>
                {product.name}
              </h6>
              <p className="text-success fw-bold mb-1">₹{product.price}</p>
              <span className="badge bg-secondary mb-2" style={{ width: 'fit-content' }}>
                {product.category}
              </span>
              <p className="text-muted small mb-0 flex-grow-1" style={{ minHeight: '60px' }}>
                {product.description.length > 80
                  ? product.description.slice(0, 80) + '...'
                  : product.description}
              </p>
              <button className="btn btn-sm btn-outline-primary w-100 mt-3 rounded-pill">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="col-12 text-center py-5">
        <h5 className="text-muted">No products found.</h5>
      </div>
    )}
  </div>
</div>


  );
};

export default ProductList;
