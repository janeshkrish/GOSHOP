import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
     <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check NOW</button>
     </div>
     <div className="offer-right">
        <img src={exclusive_image} alt="" />
     </div>
    </div>
  )
}
