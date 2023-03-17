import React, { useContext, useState } from 'react'
import ContectData from '../Store/ContectData';
import Modal from 'react-bootstrap/Modal';

const Productslist = (props) => {
    const cartctx = useContext(ContectData) 
    const price = `${props.price.toFixed(2)}`;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const AddToCartHandler = () => {
      setShow(true);
      // console.log('added to cart')
      // console.log(props.id)
      // console.log(props.title)
      // console.log(price)
      // console.log(props.imageUrl)

      cartctx.addItem({
        id: props.id,
        title: props.title,
        price: price,
        image: props.imageUrl,
        amount: 1
      })

      // addtocart(props.id,props.title,props.price,props.imageUrl)
    }

  return (
    <div className="row p-0 m-0">
      <img className="p-0 m-0" src={props.imageUrl} alt={props.title} />
      <div className="p-2 text-center">
        <h6>{props.title}</h6>
        <h5>Rs.{price}/-</h5>
        <button
          onClick={AddToCartHandler}
          className="bg-primary text-white border-0 rounded p-2 "
        >
          Add to Cart
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product is Added To Cart!..</Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <img
            className="col-2 p-0 m-0"
            src={props.imageUrl}
            alt={props.title}
          />
          <div className="col p-2">
            <h6>{props.title}</h6>
            <h5>Rs.{price}/-</h5>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Productslist
