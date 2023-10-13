import React from 'react'; // Import React (assuming you're using React)
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg'; // Correct the path to viteLogo
import './App.css';
import { sampleProducts } from './data';

function App() {
  return (
    <div>
      <header>TS AMAZONA</header>
      <main>
        <ul>
          {sampleProducts.map((product) => ( 
            <li key={product.slug}> {}
              <img src={product.image} alt={product.name} className='product-image' /> {}
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
}

export default App;
