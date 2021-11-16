import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name,description,image}=props.service
    
    return (
        <div className="service-container">
            <div className="image">
                <img src={image} alt=""/>
            </div>
            <div className="detail">
                <h2>{name}</h2>
                <p>{description}</p>
                <button 
                onClick={ () => props.handleAddToOrder(props.service)}
                >Order Now</button>
            </div>
        </div>
    );
};

export default Service;