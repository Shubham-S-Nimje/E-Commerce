import React, { useState } from 'react'
import StoreProducts from './StoreProducts';

const Store = () => {
  const [products, setProducts] = useState('')
  const hasdata = products.length > 0;

  const FetchApiProductsHandler = () => {
    fetch('https://swapi.dev/api/films')
    .then(response => {
      return response.json();
  })
  .then(data => {
    const transformProducts = data.results.map(ProductsData => {
      return {
      id: ProductsData.episode_id,
      title: ProductsData.title,
      date: ProductsData.release_date,
      }
    });
    setProducts(transformProducts);
      });
  }
  return (
    <>
    <div className="about-section bg-warning text-center p-5 m-2">
        <h1>Store Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2 className="bg-dark text-light p-2 mt-2 mb-2 text-center">Products</h2>
      <button className="btn btn-warning mb-2" onClick={FetchApiProductsHandler}>Refresh</button>
      {hasdata && <StoreProducts products={products} />}
    </>
  );
}

export default Store
