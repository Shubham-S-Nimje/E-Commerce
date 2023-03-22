import React, { useContext, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ContectData from '../../Components/Store/ContectData'
import AuthPage from '../Auth/AuthPage'
import ProductLeftBar from './ProductLeftBar'
import ProductMidBar from './ProductMidBar'
import ProductRightBar from './ProductRightBar'

const productsArr = [
    {
      id:1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id:2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id:3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id:4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      id:5,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      id:6,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

const ProductPage = () => {
  const redirect = useNavigate()
   const params = useParams();

   const newid = `${params.id}`;
   const product = productsArr.find(obj => obj.id == newid)
  //  console.log(product)
 const state = localStorage.getItem('token')
  return (
<>{state && (<section>
<div className='row p-2 m-2 text-center'>
    <div className='col-12 col-lg p-2 m-0'>
        <ProductLeftBar imageUrl={product.imageUrl}/>
    </div>
    <div className='col-12 col-lg p-2 m-0'>
        <ProductMidBar title={product.title} price={product.price}/>
    </div>
    <div className='col-12 col-lg-3 p-2 m-0'>
        <ProductRightBar price={product.price}/>
    </div>
    </div>
    <div className='row text-start m-2 p-2'>
    <h3 className='text-white py-2 text-center bg-dark'>About this item</h3>
    <div className='text-start'>
  <li>
    [WIRELESS FREEDOM] - Enjoy up to a 10-meter wireless connection with the
    Toad 23 wireless mouse’s tiny plug-and-forget wireless receiver. No
    software or driver installation needed. The mouse automatically connects
    to your computer system. It is ready to go when you are.
  </li>
  <li>
    [CARRY IT ANYWHERE, EVERYWHERE] - Portronics Toad 23 Wireless Optical
    Mouse is the perfect accessory for those who travel for work, executives
    who give presentations, or anyone who wants greater control and freedom.
    With its compact design, it easily fits in pockets.
  </li>
  <li>
    [ERGONOMIC DESIGN] - Designed to keep either hand comfortable. With the
    click wheel, Toad 23 becomes easier to use with a third click button at
    your disposal.
  </li>
  <li>
    [HIGH-SPEED OPTICAL MOUSE] - The 2.4 GHz operating speed of this
    wireless mouse sends quick signals to the device. With the button to
    adjust DPI resolution, now adjust your mouse sensitivity as per your
    requirement.
  </li>
  <li>
    [30 LAKHS+ CLICKS] - Once you buy Toad 23 Wireless Optical Mouse, you
    dont need to worry about its durability. With a life of over 30 lakhs
    clicks, this wireless mouse is highly durable and delivers optimal work
    quality to the users.
  </li>
  </div>
    </div>
    
    <div className='row text-start m-2 p-2'>
    <h3 className='text-white py-2 text-center bg-dark'>Related Products</h3>
    <div>
        <h2>more products</h2>
    </div>
    </div>
</section>)}
{!state && <AuthPage/>}
</>
  )
}

export default ProductPage
