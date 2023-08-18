import React from 'react';
import './Service.css';
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineCash } from "react-icons/hi";

const Service = () => {
  return (
    <div id='service'>
        <h3 className='service'>Service</h3>
        <div className='icone'>
            <div className="im1"><TbTruckDelivery className="delivery i1" /> <br /> <p>Door Delivery</p></div>
            <div className="im2"><RiCustomerService2Fill className="customer i2" /> <br /> <p>24*7 Support</p></div>
            <div className="im3"><HiOutlineCash className="cash i3" /> <br /> <p>Cash on Delivery</p></div>
        </div>
    </div>
  )
}

export default Service