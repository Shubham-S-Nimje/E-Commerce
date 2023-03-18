import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cartelements from './Cartelements';
import { FaShoppingCart } from 'react-icons/fa';
import ContectData from '../Store/ContectData';

const Carttoggle = (props) => {
  const cartctx = useContext(ContectData) 
  const numberOfCartItemsinCart = cartctx.items.reduce((currentNum, item) => {
    return currentNum + item.amount
  }, 0)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartItemRemoveHandler = (id) => {
    cartctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartctx.addItem({ ...item, amount: 1 });
  };



  return (
    <div>
      <Button className="row btn btn-dark p-1" onClick={handleShow}>
        <FaShoppingCart alt="carticon" />
        Cart ({numberOfCartItemsinCart})
      </Button>

      <Offcanvas show={show} placement="end" onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <h4 className="text-center">Cart({numberOfCartItemsinCart})</h4>
        </Offcanvas.Header>

        <div className="row p-0 m-0 text-center">
          <div className="col-4 p-0 m-0">
            <h4>Item</h4>
          </div>
          <div className="col-4 p-0 m-0">
            <h4>Price</h4>
          </div>
          <div className="col-4 p-0 m-0">
            <h4>Quantity</h4>
          </div>
        </div>
        <hr />

        <Offcanvas.Body>
          {cartctx.items.map((item) => (
            <Cartelements
              key={item.id}
              id={item.id}
              title={item.name}
              amount={item.amount}
              price={item.price}
              image={item.image}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </Offcanvas.Body>

        <hr />
        <h4 className='text-center'>Total: Rs.{cartctx.totalAmount}/-</h4>
        <hr />
        <button className="btn btn-warning m-2">
          Purchase
        </button>
      </Offcanvas>
    </div>
  );
}

export default Carttoggle
