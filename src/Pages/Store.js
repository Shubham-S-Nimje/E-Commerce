import React from 'react'

const Store = () => {
  return (
    <>
      <div className="about-section bg-warning text-center p-5">
        <h1>Store Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2 className="text-center">TOURS</h2>
      <table className="table container text-center">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Place</th>
            <th scope="col">Music</th>
            <th scope="col">Buy option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">JUL16</th>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="buy-btn bg-dark text-white rounded">
                BUY TICKETS
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">JUL19</th>
            <td>TORONTO,ON</td>
            <td>DBUDWEISER STAGE</td>
            <td>
              <button className="buy-btn bg-dark text-white rounded">
                BUY TICKETS
              </button>
            </td>
          </tr>
          <tr>
            <th className="tour-date">JUL 22</th>
            <td> BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <button className="buy-btn bg-dark text-white rounded">
                BUY TICKETS
              </button>
            </td>
          </tr>
          <tr>
            <th className="tour-date">JUL 29</th>
            <td>PHOENIX, AZ</td>
            <td> AK-CHIN PAVILION</td>
            <td>
              <button className="buy-btn bg-dark text-white rounded">
                BUY TICKETS
              </button>
            </td>
          </tr>
          <tr>
            <th className="tour-date">AUG 2</th>
            <td className="tour-place">LAS VEGAS, NV</td>
            <td className="tour-spec-place">T-MOBILE ARENA</td>
            <td>
              <button className="buy-btn bg-dark text-white rounded">
                BUY TICKETS
              </button>
            </td>
          </tr>
          <tr>
            <th className="tour-date">AUG 7</th>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <button className="buy-btn bg-dark text-white rounded">
                BUY TICKETS
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Store
