import React from 'react'
import Button from 'react-bootstrap/Button';
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
    ];
  return (
    <div className='row'>
        <h2 className='bg-dark text-light p-2 m-2'>Products</h2>
      {productsArr.map((products) => {
        return (
        <Card style={{ width: '18rem' }} className='col p-0 m-2' key={products.id}>
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
