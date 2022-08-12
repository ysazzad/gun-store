import React from 'react';
import './Card.css'
import { BsFillCartFill } from 'react-icons/bs'
const Card = ({ gun }) => {
    const { name, img, price, bullet, capacity, action } = gun
    return (
        <div className='card'>
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <h1>{name}</h1>
            <p>Bullet Type : {bullet}</p>
            <p>Capacity: {capacity}</p>
            <div className="add-to-cart">
                <button> <BsFillCartFill className='icon'></BsFillCartFill> </button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default Card;