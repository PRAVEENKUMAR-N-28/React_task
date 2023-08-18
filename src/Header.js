import React from 'react'
import './Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiFlowerLotusBold } from "react-icons/pi";

const Header = () => {
  return (
       <header>
            <div className='logo'>
                
                <h1><PiFlowerLotusBold className='flogo'/>Flower House <span>.</span></h1>
                </div>
            <nav className='navi'>
                <a href="#flower">Flowers</a>
                <a href="#service">Service</a>
                <a href="#about">About Us</a>
                
                <a href="#contect">Contect Us</a>
                <AiOutlineShoppingCart className='cart' />
            </nav>
       </header> 
  )
}

export default Header