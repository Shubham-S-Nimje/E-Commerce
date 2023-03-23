import React, { useContext } from 'react'
import ContectData from '../../../Components/Store/ContectData';

const Cartelements = (props) => {
  const cartctx = useContext(ContectData) 
  const hasitems = cartctx.items.length > 0;
  console.log(cartctx)


  return (
      <div className="row p-0 m-0 text-center">
        {hasitems ? 
          <div className="row p-0 m-0 text-center d-flex align-items-center justify-content-center " key={props.id}>
            <h5>{props.title}</h5>
            <div className="col-4 p-0 m-0">
              <img
                className="d-block w-100 p-0"
                src={props.image}
                alt={props.title}
              />
              <hr />
            </div>
            <div className="col-5 p-0 m-0 text-center">
              <h5>Rs.{props.price}/-</h5>
            </div>
            <div className="col-3 p-0 m-0 text-center">
              <h4>{props.amount}</h4>
              <button className="border-dark m-1 rounded" onClick={props.onAdd}>
                +
              </button>
              <button
                className="border-dark m-1 rounded"
                onClick={props.onRemove}
              >
                −
              </button>
            </div>
          </div>
         : 
          <div className="container text-center">
            <h5>Opps!.. Cart is Empty!..</h5>
            <button className="bg-dark text-white border-0 rounded p-2 m-2">
              Continue Shopping
            </button>
          </div>
        }
      </div>
  );
}

export default Cartelements
