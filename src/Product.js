import React from 'react'
import './Product.css'
import r1 from './images/r1.jpg'
import r2 from './images/r2.webp'
import s1 from './images/s1.jpg'
import { HiShoppingBag } from "react-icons/hi";

const Product = () => {
  return (
    <div id='flower'>
        <div className="heading ">
            <h3>Product</h3>
        </div>
        <div className="product">
            <div className="f1 item">
                <img src={r1} alt="" className='pro'/>
                <p>Red Rose</p>
                <p>Rs.100 <HiShoppingBag className='cart' /></p>
            </div>
            <div className="f2 item">
                <img src={r2} alt="" className='pro'/>
                <p>White Rose</p>
                <p>Rs.200 <HiShoppingBag  className='cart'/></p>
            </div>
            <div className="f3 item">
                <img src={s1} alt="" className='pro' />
                <p>Sun Flower</p>
                <p>Rs.150 <HiShoppingBag className='cart'/></p>
            </div>
            
        </div>
        <button className='button'>Explore More </button>
    </div>
  )
}

export default Product