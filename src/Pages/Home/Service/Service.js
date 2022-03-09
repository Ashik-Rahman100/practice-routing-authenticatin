import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name,des,img,price} = service
    return (
        <div className='service-container'>
            
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p> Description: {des}</p>
        </div>
    );
};
export default Service;
