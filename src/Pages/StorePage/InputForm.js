import React, { useState } from 'react'

const MovieInputForm = (props) => {
    const [IdNumber, SetIdnumber] = useState('')
    const [Productname, SetProductname] = useState('')
    const [Pricechange, SetPricechange] = useState('')

    const IdChangeHandler = (event) => {
        SetIdnumber(event.target.value)
    }

    const ProductNameChangeHandler = (event) => {
        SetProductname(event.target.value)
    }

    const PriceChangeHandler = (event) => {
        SetPricechange(event.target.value)
    }

    const OnSubmitHandler = (event) => {
        event.preventDefault()

        const product = {
            IdNumber: IdNumber,
            ProductName: Productname,
            PriceChange: Pricechange
        }
        props.addProduct(product);

        SetIdnumber('')
        SetProductname('')
        SetPricechange('')
    }

  return (
    <form className="container form-control text-center p-2" onSubmit={OnSubmitHandler}>
      <h2 className="bg-dark text-white p-2 text-center">Add Product Data</h2>
      <div className="row m-2 text-center">
        <label className="row">Enter Unique id :</label>
        <input
          className="form-control col-3"
          type="number"
          onChange={IdChangeHandler}
          value={IdNumber}
          required
        />
      </div>

      <div className="row m-2">
        <label className="row">Enter Product Name :</label>
        <input
          className="form-control col-3"
          type="text"
          onChange={ProductNameChangeHandler}
          value={Productname}
          required
        />
      </div>

      <div className="row m-2">
        <label className="row">Enter Price :</label>
        <input
          className="form-control col-3"
          type="number"
          onChange={PriceChangeHandler}
          value={Pricechange}
          required
        />
      </div>

      <button className="btn btn-warning mb-2" type='submit'>Submit</button>

    </form>
  );
}

export default MovieInputForm
