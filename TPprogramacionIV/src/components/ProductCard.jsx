import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toLocaleString('es-AR')}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
