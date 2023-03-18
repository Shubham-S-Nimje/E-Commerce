import React from 'react'

const StoreProducts = (props) => {
  return (
    <div>
      <table className="table container text-center">
      <thead>
          <tr>
            <th scope="col">Episode Number</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Release Date</th>
            <th scope="col">Buy option</th>
          </tr>
        </thead>
      {props.products.map((data) => (
        <tbody key={data.id}>
          <tr>
            <th scope="row">{data.id}</th>
            <td>{data.title}</td>
            <td>{data.date}</td>
            <td><button className="btn btn-warning mb-2">Buy Tickets</button></td>
          </tr>
          </tbody>
      ))}
      </table>
    </div>
  )
}

export default StoreProducts
