import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Productsdata = () => {
    const productsArr = [
      {
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      },
      {
        title: "Black and white Colors",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },
      {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      },
      {
        title: "Blue Color",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
    ];
  return (
    <div className='col-4'>
      <p>Products</p>
      {productsArr.map((products) => {
        return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.imageUrl} />
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
        Rs.{products.price}/-
        </Card.Text>
        <Button variant="primary">Add toCart</Button>
      </Card.Body>
    </Card>
        )
      })}
    </div>
  )
}

export default Productsdata
