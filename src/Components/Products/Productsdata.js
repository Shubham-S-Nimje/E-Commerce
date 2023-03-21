import React from 'react'
import Card from 'react-bootstrap/Card';
import Productslist from './Productslist';

const Productsdata = () => {

    const productsArr = [
      {
        id:1,
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      },
      {
        id:2,
        title: "Black and white Colors",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },
      {
        id:3,
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      },
      {
        id:4,
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
      {
        id:5,
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
      {
        id:6,
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
    ];


  return (
    <>
    <div className="row p-0 m-0">
      <h2 className="bg-dark text-light p-2 mt-2 mb-2 text-center">Products</h2>
      </div>
      <div className="row row-cols-2 p-0 m-0">
      {productsArr.map((products) => {
        return (
          <Card
            className="col-lg p-2 m-0 text-center border-0"
            key={products.id}
          >
            <Productslist
            id={products.id}
            title={products.title}
            imageUrl={products.imageUrl}
            price={products.price}>
              {productsArr}
            </Productslist>
          </Card>
        );
      })}
      </div>
      </>
  )
}

export default Productsdata
