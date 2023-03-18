import React, { useState } from 'react'
import StoreProducts from './StoreProducts';

const Store = () => {
  const [products, setProducts] = useState('')
  const [isLoading, SetisLoading] = useState(false)

  const hasdata = products.length > 0;

  async function FetchApiProductsHandler () {
    SetisLoading(true)
    const response = await fetch('https://swapi.dev/api/films')
    const data = await response.json();

    const transformProducts = data.results.map(ProductsData => {
      return {
      id: ProductsData.episode_id,
      title: ProductsData.title,
      date: ProductsData.release_date,
      }
    });
    setProducts(transformProducts);
  SetisLoading(false)
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
      <section>
      {hasdata && (!isLoading ? 
      <StoreProducts products={products} />:
      <h2 className="p-2 mt-2 mb-2 text-center">Products Loading...</h2>)}
      </section>
    </>
  );
}

export default Store
