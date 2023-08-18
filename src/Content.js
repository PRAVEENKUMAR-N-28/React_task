
import React from 'react';
import './Content.css';
import img1 from './images/shop.jpg';



const Content = () => {
  return (
              
    <div className='dislay'  >
      <img src={img1} alt="" className='img1'  />
      <p className='word'><q>Live life in full bloom.</q></p>
    </div>    
    
  )
}

export default Content