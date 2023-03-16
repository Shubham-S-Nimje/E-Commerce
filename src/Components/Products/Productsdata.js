import React from 'react'
import Card from 'react-bootstrap/Card';

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
    <div className="row p-0 m-0">
      <h2 className="bg-dark text-light p-2 mt-2 mb-2 text-center">Products</h2>
      {productsArr.map((products) => {
        return (
          <Card
            style={{ width: "18rem" }}
            className="col p-0 m-2"
            key={products.id}
          >
            <img src={products.imageUrl} alt={products.title}/>
            <div className="p-2">
              <h6>{products.title}</h6>
              <h5>Rs.{products.price}/-</h5>
              <button className="bg-primary text-white border-0 rounded p-2">
                Add to Cart
              </button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default Productsdata
