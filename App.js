import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/"><img className="logo" src="images/logo-removed.png"/></a>
        </div>
        <div>
          <a href="/bag">Bag</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div>
                        <div className="row center">
                          {
                            data.products.map((product) => (
                              <Product key={product.id} product={product}></Product>
                            ))
                          }
                            
                            
                                </div>
                            </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>                 

                        
  );
}

export default App;
