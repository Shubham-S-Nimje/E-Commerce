import React, { useCallback, useEffect, useState } from 'react'
import LoaderData from '../../Assets/LoaderData';
import MovieInputForm from './InputForm';
import StoreCorouselData from './StoreCorouselData';
import StoreProductList from './StoreProductList';


let timer;
const StorePage = () => {
  const [products, setProducts] = useState('')
  const [isLoading, SetisLoading] = useState(false)
  const [isfetching, Setisfetsing] = useState(false)
  const [error, Seterror] = useState(null)
  // const [cancel, setcancel] = useState(true)

  const hasdata = products.length > 0;

  const FetchApiProductsHandler = useCallback(async () => {
    Setisfetsing(true)
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
  },[])

  useEffect(() => {
    FetchApiProductsHandler();
  },[FetchApiProductsHandler])

  const addMovieHandler = useCallback(async (product) => {
    try {
    const response = await fetch('https://react-ecommerce-5db66-default-rtdb.firebaseio.com/products.json', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    console.log('Data Added =',data);
    SetisLoading(true)
    FetchApiProductsHandler();
    }
    catch (error) {
      Seterror(error.message);
    }
    setTimeout(() => {
      SetisLoading(false)
    }, 500);
    SetisLoading(true)
  },[FetchApiProductsHandler])

  const DeleteDataHandler = useCallback(async (event) => {
    try {
      const response = await fetch(`https://react-ecommerce-5db66-default-rtdb.firebaseio.com/products/${event.target.value}.json`, {
        method: 'DELETE',
        body: JSON.stringify(event.target.value),
        headers: {
          'Content-type': 'application/json'
        }
      });
      console.log('Data Removed =',event.target.value)
      const data = await response.json();
      console.log('Data Removed =',data);
      FetchApiProductsHandler();
    }
    catch (error) {
      Seterror(error.message);
    }
    setTimeout(() => {
      SetisLoading(false)
    }, 500);
    SetisLoading(true)
  },[])


  const CancelHandler = () => {
    clearTimeout(timer)
    console.log('Refresh Canceled')
  }

  const RefreshProductsHandler = () => {
    FetchApiProductsHandler();
    setTimeout(() => {
      SetisLoading(false)
    }, 500);
    SetisLoading(true)
    console.log('Data Refreshed')
  }

  return (
    <>
      <StoreCorouselData/>

      <MovieInputForm addProduct={addMovieHandler} />

      <h2 className="bg-dark text-light p-2 mt-2 mb-2 text-center">Products</h2>
      <button
        className="btn btn-warning mb-2"
        onClick={RefreshProductsHandler}
      >
        Refresh
      </button>
      
      {isLoading && (
            <div className="text-center">
              <LoaderData/>
              <h2 className="p-2 mt-2 mb-2 text-center">Products Loading...</h2>
            </div>
          )}
          
      <section>
        <table className="table container text-center">
          <thead>
            <tr>
              <th scope="col">Unique Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Remove Product</th>
            </tr>
          </thead>

          {hasdata && (
            products.map((data) => (
              <StoreProductList
              key={data.id}
              id={data.id} IdNumber= {data.IdNumber} ProductName={data.ProductName} 
              PriceChange={data.PriceChange}
              value={data.id}
              DeleteData={DeleteDataHandler}/>
            ))
          )}
        </table>

        {!hasdata && !error &&
          (isfetching ? (
            <div className="text-center">
              <LoaderData/>
              <h2 className="p-2 mt-2 mb-2 text-center">
                Fetching data from server...
              </h2>
            </div>
          ) : (
            <h2 className="p-2 mt-2 mb-2 text-center">No Data Found</h2>
          ))}

        {error && (
          <h2 className="p-2 mt-2 mb-2 text-center">
            {error}
            <br />
            <button className="btn btn-warning m-2" onClick={CancelHandler}>
              Cancel
            </button>
          </h2>
        )}
      </section>
    </>
  );
}

export default StorePage
