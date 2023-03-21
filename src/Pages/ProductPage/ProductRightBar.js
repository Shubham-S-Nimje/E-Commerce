import React from 'react'
import ProductShare from './ProductShare'

const ProductRightBar = (props) => {
  return (
    <>
    <div className='text-start bg-light border rounded p-4'>
      <h2>₹{props.price}</h2>
      <span>FREE delivery Wednesday, 22 March on your first order. Details</span><br/>
      <span>Or fastest delivery Tomorrow, March 21. Order within 6 hrs 37 mins. Details</span><br/>
      <span>Select delivery location</span><br/>
      <span>In stock</span><br/>
      <span>Sold by Appario Retail Private Ltd and Fulfilled by Amazon.</span><br/>
      <span>Quantity:1</span><br/>
      <button className='btn btn-warning m-2'>Add to CArt</button><br/>
      <button className='btn btn-warning m-2'>Buy Now</button><br/>
      <span>Secure transaction</span><br/>
      <span>Add gift options</span>
    </div>
    <ProductShare/>
    </>
  )
}

export default ProductRightBar
