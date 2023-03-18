import React, { useCallback, useEffect, useState } from 'react'
import MovieInputForm from '../Components/MovieInputForm/MovieInputForm';
import StoreProducts from './StoreProducts';


let timer;
const Store = () => {
  const [products, setProducts] = useState('')
  const [isLoading, SetisLoading] = useState(false)
  const [isfetching, Setisfetsing] = useState(false)
  const [error, Seterror] = useState(null)
  // const [cancel, setcancel] = useState(true)

  const hasdata = products.length > 0;

  const FetchApiProductsHandler = useCallback(async () => {
    Setisfetsing(true)
    SetisLoading(true)
    Seterror(null);

    try {
      const response = await fetch('https://react-ecommerce-5db66-default-rtdb.firebaseio.com/products.json')

      if(!response.ok){
        timer =  setTimeout(() => {
          FetchApiProductsHandler()
        }, 3000);
        throw new Error('Something went wrong ...Retrying')
      }
      const data = await response.json();
      
      const loadProduct = [];

      for (const key in data) {
        loadProduct.push({
          id: key,
          IdNumber: data[key].IdNumber,
          ProductName: data[key].ProductName,
          PriceChange: data[key].PriceChange
        })
      }

      // const transformProducts = data.map(ProductsData => {
      //   return {
      //   id: ProductsData.episode_id,
      //   MovieName: ProductsData.title,
      //   date: ProductsData.release_date,
      //   }
      // });
      
      setProducts(loadProduct);
      Setisfetsing(false)
    }
    catch (error) {
      Seterror(error.message);
    }
    SetisLoading(false)
  },[])

  useEffect(() => {
    FetchApiProductsHandler();
  },[FetchApiProductsHandler])

  async function addMovieHandler(product) {
    const response = await fetch('https://react-ecommerce-5db66-default-rtdb.firebaseio.com/products.json', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-type': 'application/jason'
      }
    });
    const data = await response.json();
    console.log(data);
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

      <MovieInputForm addProduct={addMovieHandler}/>

      <h2 className="bg-dark text-light p-2 mt-2 mb-2 text-center">Products</h2>
      <button className="btn btn-warning mb-2" onClick={FetchApiProductsHandler}>Refresh</button>
      <section>

      {hasdata && (!isLoading ? 
      <StoreProducts products={products} />:

      <div className="text-center">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only"/>
      </div>
      <h2 className="p-2 mt-2 mb-2 text-center">Products Loading...</h2>
      </div>)}

      {!hasdata && (isfetching && isLoading ? 
      <div className="text-center">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only"/>
      </div>
      <h2 className="p-2 mt-2 mb-2 text-center">Fetching data from server...</h2>
    </div>
      : '')}

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
