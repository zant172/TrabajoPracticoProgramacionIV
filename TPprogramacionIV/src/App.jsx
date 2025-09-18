import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const products = [
  { id: 1, name: "RTX 4090", price: 150000, img: "https://via.placeholder.com/300x200?text=RTX+4090" },
  { id: 2, name: "Ryzen 9 7900X", price: 90000, img: "https://via.placeholder.com/300x200?text=Ryzen+9+7900X" },
  { id: 3, name: "SSD 2TB NVMe", price: 45000, img: "https://via.placeholder.com/300x200?text=SSD+2TB+NVMe" },
  { id: 4, name: "Monitor 4K 27''", price: 85000, img: "https://via.placeholder.com/300x200?text=Monitor+4K+27" }
];

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="product-section" id="productos">
        <h2 className="section-title">Nuestros Productos</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
