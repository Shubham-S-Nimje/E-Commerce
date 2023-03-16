import React from 'react'

const Cartelements = () => {

  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return (
    <div className="row p-0 m-0 text-center">
      <div className="row p-0 m-0">
        <div className="col p-0 m-0">
          <h4>Item</h4>
        </div>
        <div className="col p-0 m-0">
          <h4>Price</h4>
        </div>
        <div className="col p-0 m-0">
          <h4>Quantity</h4>
        </div>
      </div>
      {cartElements.map((products) => {
        return (
          <>
          <div className="row p-0 m-0">
          <div className="col p-0 m-0">
          <img className="d-block w-100 p-2" src={products.imageUrl} alt={products.title} />
          </div>
          <div className="col p-0 m-0">
          <h5>Rs.{products.price}/-</h5>
          </div>
          <div className="col p-0 m-0">
            <h4>1</h4>
          </div>
        </div>
        </>
        );
      })}

    </div>
  );
}

export default Cartelements
