import React from 'react'

const StoreProducts = (props) => {
  // console.log(props.products)
  return (
    <div>
      <table className="table container text-center">
      <thead>
          <tr>
            <th scope="col">Unique Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Buy option</th>
          </tr>
        </thead>
      {props.products.map((data) => (
        <tbody key={data.id}>
          <tr>
            <th scope="row">{data.IdNumber}</th>
            <td>{data.ProductName}</td>
            <td>Rs. {data.PriceChange} /-</td>
            <td><button className="btn btn-warning mb-2">Buy Now</button></td>
          </tr>
          </tbody>
      ))}
      </table>
    </div>
  )
}

export default StoreProducts
