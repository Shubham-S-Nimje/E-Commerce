import React from 'react'

const StoreProductList = (props) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.IdNumber}</th>
        <td>{props.ProductName}</td>
        <td>Rs. {props.PriceChange} /-</td>
        <td>
          <button
            className="btn btn-warning mb-2"
            value={props.id}
            onClick={props.DeleteData}
          >
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default StoreProductList
