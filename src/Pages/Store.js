import React, { useState } from 'react'
import StoreProducts from './StoreProducts';


let timer;
const Store = () => {
  const [products, setProducts] = useState('')
  const [isLoading, SetisLoading] = useState(false)
  const [isfetching, Setisfetsing] = useState(false)
  const [error, Seterror] = useState(null)
  const [cancel, setcancel] = useState(true)

  const hasdata = products.length > 0;

  async function FetchApiProductsHandler () {
    Setisfetsing(true)
    SetisLoading(true)
    Seterror(null);

    try {
      const response = await fetch('https://swapi.dev/api/film/')

      if(!response.ok){
        timer =  setTimeout(() => {
          FetchApiProductsHandler()
        }, 3000);
        throw new Error('Something went wrong ...Retrying')
      }
      const data = await response.json();
      const transformProducts = data.results.map(ProductsData => {
        return {
        id: ProductsData.episode_id,
        title: ProductsData.title,
        date: ProductsData.release_date,
        }
      });
      setProducts(transformProducts);
      Setisfetsing(false)
    }
    catch (error) {
      Seterror(error.message);
    }
    SetisLoading(false)
  }

  const CancelHandler = () => {
    clearTimeout(timer)
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
      {!hasdata && (isfetching && isLoading ? 
      <h2 className="p-2 mt-2 mb-2 text-center">Fetching data from server...</h2>: '')}
      {!hasdata && error &&
      <h2 className="p-2 mt-2 mb-2 text-center">No Data Found</h2>}
      {!isLoading && error && 
      <h2 className="p-2 mt-2 mb-2 text-center">{error}<br/>
      <button className="btn btn-warning m-2"
      onClick={CancelHandler}>
        Cancel</button></h2>}
      </section>
    </>
  );
}

export default Store
