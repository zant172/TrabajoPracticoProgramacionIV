import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const products = [
  { id: 1, name: "RTX 4090", price: 150000, img: "https://via.placeholder.com/200" },
  { id: 2, name: "Ryzen 9 7900X", price: 90000, img: "https://via.placeholder.com/200" },
  { id: 3, name: "SSD 2TB NVMe", price: 45000, img: "https://via.placeholder.com/200" },
  { id: 4, name: "Monitor 4K 27''", price: 85000, img: "https://via.placeholder.com/200" }
];

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
