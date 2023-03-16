import React from 'react'

const Cartelements = () => {

  const cartElements = [
    {
      id:1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id:2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id:3,
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
      <hr/>
      {cartElements.map((cartproducts) => {
        return (
          <div className="row p-0 m-0" key={cartproducts.id}>
          <div className="col p-0 m-0">
          <img className="d-block w-100 p-2" src={cartproducts.imageUrl} alt={cartproducts.title} />
          </div>
          <div className="col p-0 m-0">
          <h5>Rs.{cartproducts.price}/-</h5>
          </div>
          <div className="col p-0 m-0">
            <h4>{cartproducts.quantity}</h4>
          </div>
        </div>
        );
      })}
      <hr/>
      <h4>Total: Rs.220/-</h4>
      <hr/>
<button className='bg-dark text-white border-0 rounded p-2'>Purchase</button>
    </div>
  );
}

export default Cartelements
