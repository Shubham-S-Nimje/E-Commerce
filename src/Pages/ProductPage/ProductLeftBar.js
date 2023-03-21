import React from 'react'


const ProductLeftBar = (props) => {
  return (
    <div>
        <div className="row">
          <img
            className="w-100"
            src={props.imageUrl}
            alt="title"
          />
        </div>
        <div className="row">
          <div className="col-3 p-1">
            <img
              className="w-100"
              src={props.imageUrl}
              alt="title"
            />
          </div>
          <div className="col-3 p-1">
            <img
              className="w-100"
              src={props.imageUrl}
              alt="title"
            />
          </div>
          <div className="col-3 p-1">
            <img
              className="w-100"
              src={props.imageUrl}
              alt="title"
            />
          </div>
          <div className="col-3 p-1">
            <img
              className="w-100"
              src={props.imageUrl}
              alt="title"
            />
          </div>
        </div>
    </div>
  );
}

export default ProductLeftBar
