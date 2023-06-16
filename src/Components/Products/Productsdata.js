import React from 'react'
import Card from 'react-bootstrap/Card';
import Productslist from './Productslist';
import { useEffect } from 'react';
import { useState } from 'react';

const Productsdata = () => {
  const [products, setProducts] = useState([]);
    useEffect(()=> {
      fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch((error) => alert(error));
      // console.log(data)
    },[])
  //  console.log(products)

  return (
    <>
    <div className="row p-0 m-0">
      <h2 className="bg-dark text-light p-2 mt-2 mb-2 text-center">Products</h2>
      </div>
      <div className="row row-cols-2 p-0 m-0">
      {products.map((products) => {
        return (
          <Card
            className="col-lg-2 p-2 m-0 text-center border-0"
            key={products.id}
          >
            <Productslist
            id={products.id}
            title={products.title}
            imageUrl={products.image}
            rating={products.rating}
            price={products.price}>
            </Productslist>
          </Card>
        );
      })}
      </div>
      </>
  )
}

export default Productsdata
