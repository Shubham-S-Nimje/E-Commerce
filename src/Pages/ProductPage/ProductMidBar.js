import React from 'react'
import ProductShare from './ProductShare'

const ProductMidBar = (props) => {
  return (
    <div className="text-start">
      <h1>
        {props.title}
      </h1>
      <span>Brandname:nike</span><br/>
      <span> 4.1 out of 5 stars 2,525 ratings | 49 answered questions</span><br/>
      <span>Amazon's Choice for "wireless mouse"</span>
      <hr />
      <span>Deal</span><br/>
      <h2>-50% ₹{props.price}</h2>
      <span>M.R.P.: ₹599</span><br/>
      <span>Inclusive of all taxes</span><br/>
      <hr />
      <ProductShare/>
    </div>
  );
}

export default ProductMidBar
