import React, { useContext, useState } from 'react'
import ContectData from '../Store/ContectData';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

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
    <div className="row p-0 m-0 rounded card">
      <Link to={`/productpage/${props.id}`}  className="p-0 m-0 text-decoration-none text-dark">
      <img className="w-100 p-2 m-0 rounded" src={props.imageUrl} alt={props.title} />
      <div className="p-2 text-center">
        <h6 className='text-truncate'>{props.title}</h6>
        <h5 className='text-danger'>Rs.{price}/-</h5>
      </div>
      </Link>

      <button
          onClick={AddToCartHandler}
          className="btn btn-warning m-0"
        >
          Add to Cart
        </button>

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
