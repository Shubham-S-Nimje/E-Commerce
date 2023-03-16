import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cartelements from './Cartelements';
import { FaShoppingCart } from 'react-icons/fa';

const Carttoggle = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className='row btn btn-dark p-1'
      onClick={handleShow}>
      <FaShoppingCart alt='carticon'/>
      Cart (0)
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header className='text-center' closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cartelements/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Carttoggle
