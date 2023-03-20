import React from 'react'

const Loader = () => {
  return (
    <div className="text-center" id="my_box">
              <div className="spinner-border text-warning" role="status">
                <span className="sr-only" />
              </div>
              <h2 className="p-2 mt-2 mb-2 text-center">
              Products Loading...
              </h2>
            </div>
  )
}

export default Loader
